import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'

import {Routes, Route, useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import PageNotFound from './PageNotFound';
 
const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        // dispatch(addUser(user));
        navigate('/browse');
  } else {
      dispatch(removeUser());
      navigate('/');
  }
});
  },[])

  return (
  <>
    <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/browse' element={<Browse />}></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
  </>
  )
}

export default Body