// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCelg0ksxgitGklEhELT9BdURnCDoOL0Oo",
    authDomain: "coffee-shop-58cd5.firebaseapp.com",
    projectId: "coffee-shop-58cd5",
    storageBucket: "coffee-shop-58cd5.appspot.com",
    messagingSenderId: "905082866439",
    appId: "1:905082866439:web:ff7ce3b32d29972eb393a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;