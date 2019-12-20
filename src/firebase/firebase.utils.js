/* 
    !   REF:
    *   
    !   Query Reference vs Query Snapshot
    *   
    *   a query is a request we make to firestore
    *   to give us something from the database
    *   
    *   Firestore returns us two types of objects: 
    *   references and snapshots, they can be either
    *   
    *   1. Document or 
    *   2. Collection versions
    *   
    *   Firestore will always return us these objects,
    *   even if nothing exists at from that query
    *   
    !   Document Reference vs Collection Reference
    *   
    *   We use docuentRef objects to perform our CRUD 
    *   methods. The documentRef methods are 
    *     
    *   1. @set
    *   2. @get
    *   3. @upadte
    *   4. @delete
    *   
    *   We can also add documents to collections using
    *   the collectionRef object using the .add() method.
    *   
    *   eg: collectionRef.add({ key: value })
    *   
    *   We can add snapshotObject from the referenceObject
    *   using the .get() method.
    *   
    *   eg: documentRef.get() or
    *       collectionRef.get()
    *   
    *   documentRef returns a documentSnapshot object,  
    *   collectionRef returns a querySnapshot object.
    *   
    !   Document Snapshot
    *   
    *   We get a documentSnapshot object from our
    *   documentReference object.
    *   
    *   The documentSnapshot object allows us to 
    *   check if a document exists at this query
    *   using the .exists property which returns
    *   a boolean.
    *   
    *   We can also get the actual properties on 
    *   the object by calling the .data() method,
    *   which returns us a JSON object on the 
    *   document.
    *   
    *   
*/

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

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth)
        return;

    const userRef = firestore.doc(`users/${ userAuth.uid }`);

    const snapShot = await userRef.get();

    if(!snapShot.exists)
    {
        // Create a piece of data
        // using userRef

        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            });

        } catch(error) {

            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
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
