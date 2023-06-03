
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBmwcPMY9ZHU58vidJcJm8LDALs5FerJo0",
    authDomain: "elfexpress-elven.firebaseapp.com",
    databaseURL: "https://elfexpress-elven.firebaseio.com",
    projectId: "elfexpress-elven",
    storageBucket: "elfexpress-elven.appspot.com",
    messagingSenderId: "524905544794",
    appId: "1:524905544794:web:9352e1cb4ec99662eeac63",
    measurementId: "G-CHCE7PRG4P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
