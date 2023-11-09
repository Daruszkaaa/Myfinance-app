import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFyYCIPiPhSTrbY82HZXBumbcHgqig5r8",
  authDomain: "my-finance-app-b5f97.firebaseapp.com",
  projectId: "my-finance-app-b5f97",
  storageBucket: "my-finance-app-b5f97.appspot.com",
  messagingSenderId: "979913562137",
  appId: "1:979913562137:web:beb8b8f792f9a831e2f288"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{ app, auth }