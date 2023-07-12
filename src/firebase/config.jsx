import { initializeApp } from "firebase/app"; //se trae el modulo que inicializa la aplicación
import { getAuth } from "firebase/auth"; //se importa el modulo del login de google

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_VvW8NYdxvdjiLU-dnqfSK41R5oUJfKQ",
  authDomain: "fuck-off-47ebe.firebaseapp.com",
  projectId: "fuck-off-47ebe",
  storageBucket: "fuck-off-47ebe.appspot.com",
  messagingSenderId: "591662005529",
  appId: "1:591662005529:web:b79cadc5c25a49152d9988",
  measurementId: "G-TBDWCBX2R5",
}; //configuración de firebase, se guarda dentro de una constante

// Initialize Firebase
const app = initializeApp(firebaseConfig); //se pasa todo el objeto para que pueda conectarse a la api de firebase
export const auth = getAuth(app);
