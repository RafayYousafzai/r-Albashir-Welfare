"use server";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../config";
import { getUserData } from "./get";

const auth = getAuth(app);
const db = getFirestore();

async function signUpWithEmail(data) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;
    await saveUserDataToUserDoc(data.email, data);
    console.log("Sign up successful!");
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

async function signInWithEmail(data) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = userCredential.user;
    await saveUserDataToUserDoc(data.email, data);
    await getUserData(data.email);
    console.log("Sign in successful!");
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

async function saveUserDataToUserDoc(email, data) {
  try {
    const userDocRef = doc(db, "users", email);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          await updateDoc(userDocRef, { [key]: data[key] });
        }
      }
    } else {
      await setDoc(userDocRef, data);
    }

    console.log("Info Updated!");
  } catch (error) {
    const errorMessage =
      error.message || "An error occurred while saving user data.";
    console.log(errorMessage);
  }
}

const logout = async () => {
  try {
    // localStorage.removeItem("user");
    // localStorage.removeItem("userDoc");
    // console.log("Logout Successfully");
    return true;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export { signUpWithEmail, signInWithEmail, saveUserDataToUserDoc, logout };
