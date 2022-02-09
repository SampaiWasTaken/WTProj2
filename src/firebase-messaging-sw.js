importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCB7PnJXnup5zB0ACOR0TG3U-eV5c1ajI0",
  authDomain: "kitchennotifications2022.firebaseapp.com",
  projectId: "kitchennotifications2022",
  storageBucket: "kitchennotifications2022.appspot.com",
  messagingSenderId: "459153718645",
  appId: "1:459153718645:web:268b3e0629d1486c85a73c",
  measurementId: "G-3D3QK1STKJ"
});

const messaging = firebase.messaging();

