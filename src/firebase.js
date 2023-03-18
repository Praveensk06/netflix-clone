import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";

// Your Firebase configuration and initialization code goes here

const firebaseConfig = {
  apiKey: "AIzaSyBOO7JyzWDp9fG5omgRaGPg43ti-29KW2g",
  authDomain: "netflix-clone-57a4a.firebaseapp.com",
  projectId: "netflix-clone-57a4a",
  storageBucket: "netflix-clone-57a4a.appspot.com",
  messagingSenderId: "253851598017",
  appId: "1:253851598017:web:52ab7f0e815fc4d734e840",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

export default app;
