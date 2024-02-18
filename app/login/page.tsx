'use client'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";


export default function SignIn() {

  async function checkUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const str = JSON.stringify(doc)
      const res = JSON.parse(str)
      const uid = res._document.data.value.mapValue.fields.uid.stringValue;
      console.log(`User id => ${uid}`);
    });
  }

  function signIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        checkUsers()
      }).catch((error) => {
        console.log(error)
      });
  }


  return (
    <>
      <button onClick={() => signIn()}>Iniciar sesión con Google</button>
      <button className="mt-8 block" onClick={() => checkUsers()}>checkUsers</button>
    </>
  );
}
