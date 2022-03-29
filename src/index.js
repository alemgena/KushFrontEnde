import React from 'react';
import ReactDOM from 'react-dom';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import './index.css';
import App from './App';
import './index.scss';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { rightDrawerSlice } from './slices/right_drawer';
import { Provider } from 'react-redux';
import { leftDrawerSlice } from './slices/left_drawer';
import { categorySlice } from './slices/category';
import { wishlistSlice } from './slices/wishlist';
import { productSlice } from './slices/product';
import { productsSlice } from './slices/products';
import { registerSlice } from './slices/register';
import { loginSlice } from './slices/login';
import { cartSlice } from './slices/cart';
import { navbarSlice } from './slices/navbar';
import { searchSlice } from './slices/search';
import { profileSlice } from './slices/profile';
import { recoverPasswordSlice } from './slices/recover_password';
import { verifySlice } from './slices/verfiy';
import { slipSlice } from './slices/slip';




// a function to configure a redux store
const store = configureStore({
  reducer:{
    rightDrawer:rightDrawerSlice.reducer,
    leftDrawer:leftDrawerSlice.reducer,
    category:categorySlice.reducer,
    product:productSlice.reducer,
    products:productsSlice.reducer,
    wishlist:wishlistSlice.reducer,
    register:registerSlice.reducer,
    login:loginSlice.reducer,
    cart:cartSlice.reducer,
    navbar:navbarSlice.reducer,
    search:searchSlice.reducer,
    profile:profileSlice.reducer,
    recoverPassword:recoverPasswordSlice.reducer,
    verify:verifySlice.reducer,
    slip:slipSlice.reducer,
  }
  
})



// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)   // language switch
//   .init({
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     resources: {
//       en: {
//         translation: {
//           "Welcome to React": "Welcome to English"
//         }
//       },
//       ar: {
//         translation: {
//           "Welcome to React": " العربية Arabic"
//         }
//       }
//     },
//     fallbackLng: "en",

//     detection: {
//       order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
//       caches: ['cookie'],
//     }
//   });

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t('Welcome to React')}</h2>;
// }


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> <App /></Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
