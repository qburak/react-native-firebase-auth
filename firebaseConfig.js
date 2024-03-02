// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence} from "firebase/auth";
import { ReactNativeAsyncStorage } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "-",
  authDomain: "domain",
  projectId: "id",
  storageBucket: "-",
  messagingSenderId: "-",
  appId: "-"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
export const db = getFirestore(app);
export default app;
