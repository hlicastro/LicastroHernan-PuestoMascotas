import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbWa409otYlf4C-mQRyHG4EvYQCIjhGeo",
  authDomain: "hernanpuestomascotas.firebaseapp.com",
  projectId: "hernanpuestomascotas",
  storageBucket: "hernanpuestomascotas.appspot.com",
  messagingSenderId: "747144450650",
  appId: "1:747144450650:web:1d899108cac18d17007e63"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);