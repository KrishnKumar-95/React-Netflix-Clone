import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  
    apiKey: "########################################",
    authDomain: "##########################################",
    projectId: "######################################",
    storageBucket: "#####################################",
    messagingSenderId: "919518297071",
    appId: "#######################################"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {auth};
  export default db;
