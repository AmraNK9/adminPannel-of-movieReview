
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxxHn6NDNItRduRZMX1QtgliixVs_TexY",
  authDomain: "movie-review-vlog.firebaseapp.com",
  databaseURL: "https://movie-review-vlog-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "movie-review-vlog",
  storageBucket: "movie-review-vlog.appspot.com",
  messagingSenderId: "409451842285",
  appId: "1:409451842285:web:9a24d36801247168f0dae4",
  measurementId: "G-HL0Z3Y1F8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

const db = getDatabase();

// call varible
let postId,postNumber,caption,title,content,movieNumber,movieAray;
