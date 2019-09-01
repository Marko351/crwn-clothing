import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCTOrXVNv6lobTyBN86tjefMWeQMYxam-U',
  authDomain: 'crwn-db-47c9e.firebaseapp.com',
  databaseURL: 'https://crwn-db-47c9e.firebaseio.com',
  projectId: 'crwn-db-47c9e',
  storageBucket: '',
  messagingSenderId: '113947251758',
  appId: '1:113947251758:web:4a2478882f5705c1'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
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
      console.log('Error createing user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); // show popup for select google profile
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
