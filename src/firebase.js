import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
require ("firebase/firestore");

// Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyC2-V3As8pASeQi6IyG74Nbfz5naD7Tc1U",
        authDomain: "rattanesia-93fa4.firebaseapp.com",
        databaseURL: "https://rattanesia-93fa4.firebaseio.com",
        projectId: "rattanesia-93fa4",
        storageBucket: "rattanesia-93fa4.appspot.com",
        messagingSenderId: "62992322348",
        appId: "1:62992322348:web:52887b3bd829ba8e7e2689",
        measurementId: "G-N2EZHL96JW"
    };
    // Initialize Firebase
    const fb = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    export {fb,db}
    