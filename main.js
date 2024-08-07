import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyD_N_5Tjv9zh_eJyfTXxUOICM2XX86--IM",
  authDomain: "datasiswa-aebb3.firebaseapp.com",
  projectId: "datasiswa-aebb3",
  storageBucket: "datasiswa-aebb3.appspot.com",
  messagingSenderId: "1049128187878",
  appId: "1:1049128187878:web:e1879710f4b5252a68c827",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

