// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMS13qxjbyJHczN96__abxBj4gRv4SbXs",
  authDomain: "brewitter-e178c.firebaseapp.com",
  projectId: "brewitter-e178c",
  storageBucket: "brewitter-e178c.appspot.com",
  messagingSenderId: "893480219680",
  appId: "1:893480219680:web:2a4568a78efcce360fb845",
  measurementId: "G-4L59B31310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */

export default app;
