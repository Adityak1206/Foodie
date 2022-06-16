import {getApp,getApps,initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDzco3n06-F_McHubIWd3zz717DxYjOzBQ",
  authDomain: "restaurantapp-7ed51.firebaseapp.com",
  databaseURL: "https://restaurantapp-7ed51-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-7ed51",
  storageBucket: "restaurantapp-7ed51.appspot.com",
  messagingSenderId: "908150811170",
  appId: "1:908150811170:web:d097129a99a897e704787b"
};

const app=getApps.length>0 ? getApp() :initializeApp(firebaseConfig);

const firestore=getFirestore(app);

const storage=getStorage(app);

export {app,firestore,storage}; 