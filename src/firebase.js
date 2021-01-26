import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCtaj_km3sy00Ooap07mtji-FG_6w5GNmQ',
  authDomain: 'ecomerce-react-app.firebaseapp.com',
  projectId: 'ecomerce-react-app',
  storageBucket: 'ecomerce-react-app.appspot.com',
  messagingSenderId: '528955151195',
  appId: '1:528955151195:web:0c3a5c9b2c1e158beec07e',
  measurementId: 'G-T3MW0NLB2C'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
