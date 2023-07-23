// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwgGC3tSJGUeaUp17_XZ40SXkcZ0MeFSM",
  authDomain: "goto-baffa.firebaseapp.com",
  projectId: "goto-baffa",
  storageBucket: "goto-baffa.appspot.com",
  messagingSenderId: "189612125335",
  appId: "1:189612125335:web:df3f6e9cccd6d08fda4dd2",
  measurementId: "G-0X5CGFBJDQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);