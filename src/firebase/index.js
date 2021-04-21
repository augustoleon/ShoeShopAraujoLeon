import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({

    apiKey: "AIzaSyC5m_Xu_ejVD6vl4VyhbhF8WHqOFMjEjRk",
    authDomain: "ecommerce-shoeshop.firebaseapp.com",
    projectId: "ecommerce-shoeshop",
    storageBucket: "ecommerce-shoeshop.appspot.com",
    messagingSenderId: "849450436531",
    appId: "1:849450436531:web:82bd6e0bc2c266f328edc6"

});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore.app;
