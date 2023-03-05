import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIOhgoRLMhy7qJ4l67D1L-shERAscdfAA",
  authDomain: "ecomercespartan.firebaseapp.com",
  projectId: "ecomercespartan",
  storageBucket: "ecomercespartan.appspot.com",
  messagingSenderId: "660857006030",
  appId: "1:660857006030:web:1067b6824be860111b6d9f"
};


const app = initializeApp(firebaseConfig);

export const initFirestore = ()=>{
    return app
}