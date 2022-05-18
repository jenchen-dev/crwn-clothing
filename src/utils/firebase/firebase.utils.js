import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDm_Qe2zSu2IxnefYO4cg5zYHXb5cyyCmI",
    authDomain: "crwn-clothing-db-d5b11.firebaseapp.com",
    projectId: "crwn-clothing-db-d5b11",
    storageBucket: "crwn-clothing-db-d5b11.appspot.com",
    messagingSenderId: "364037323907",
    appId: "1:364037323907:web:e4eefacc1572dc6b34afb6"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
             await setDoc(userDocRef, {
                 displayName,
                 email,
                 createdAt
             });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
};