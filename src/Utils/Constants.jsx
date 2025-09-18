export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_KEY
  }
};

export const API_URL='https://image.tmdb.org/t/p/w200';

export const lang={
  english:{
    search:'search',
    gptPlaceholder:'what do you like to watch today?'
  },
  hindi:{
    search:'खोजें',
    gptPlaceholder:'आप आज क्या देखना पसंद करते हैं?'
  },
  bengali:{
    search:'অনুসন্ধান',
    gptPlaceholder:'আপনি আজ কি দেখতে পছন্দ করেন?'
  },
  urdu:{
    search:'تلاش کریں',
    gptPlaceholder:'آپ آج کیا دیکھنا پسند کرتے ہیں؟?'
  }
}