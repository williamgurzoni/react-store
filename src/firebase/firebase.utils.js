import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyCqRbVFiIofaF1fKYKz7oWh3jRYWUhsbT4",
  authDomain: "crown-store-3af08.firebaseapp.com",
  databaseURL: "https://crown-store-3af08.firebaseio.com",
  projectId: "crown-store-3af08",
  storageBucket: "crown-store-3af08.appspot.com",
  messagingSenderId: "44713453237",
  appId: "1:44713453237:web:99312be319b813a86e80fc",
  measurementId: "G-J855RSC9G0"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
