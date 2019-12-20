import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
// import { fireEvent } from '@testing-library/react';

const config = {
    apiKey: "AIzaSyA_8Zr2kugDLwExovL1WzZRZSxJ1YxRsRo",
    authDomain: "crwn-clothing-db-3c4cf.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-3c4cf.firebaseio.com",
    projectId: "crwn-clothing-db-3c4cf",
    storageBucket: "crwn-clothing-db-3c4cf.appspot.com",
    messagingSenderId: "153110067309",
    appId: "1:153110067309:web:ae8d2fa4850256cd8a6764",
    measurementId: "G-E9N20YH9LM"
};

firebase.initializeApp( config );

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;
