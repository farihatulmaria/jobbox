const { initializeApp } = require('firebase/app');
const {getAuth} = require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyCoyzRIBz0siYIp_gCU9nwCYGPEmRSnc_A",
  authDomain: "job-box-ccec0.firebaseapp.com",
  projectId: "job-box-ccec0",
  storageBucket: "job-box-ccec0.appspot.com",
  messagingSenderId: "812115237578",
  appId: "1:812115237578:web:a6992b9d6a546b58e4f233",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth