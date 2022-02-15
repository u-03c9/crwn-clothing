import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAgO3U68r6hu2BWmmw_8LLnndJXv80p_pc",
  authDomain: "crw-clothing-03c9.firebaseapp.com",
  databaseURL:
    "https://crw-clothing-03c9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crw-clothing-03c9",
  storageBucket: "crw-clothing-03c9.appspot.com",
  messagingSenderId: "569385492445",
  appId: "1:569385492445:web:7179d0e766bed23062e034",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
