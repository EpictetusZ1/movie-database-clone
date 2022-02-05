// React & Components
import React from 'react';
import RouteSwitch from "./router/RouteSwitch";

// firebase and firebase Hooks
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
import Header from "./components/Header/Header";

 // TODO: Set up collection to userID so that only users who are logged in can access their
 // collection with the same rules from the  app


const App = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyDsl0ETHfI7m13ZH4ZwoEGodr268HoShJI",
        authDomain: "moviedatabaseclone.firebaseapp.com",
        projectId: "moviedatabaseclone",
        storageBucket: "moviedatabaseclone.appspot.com",
        messagingSenderId: "897684310546",
        appId: "1:897684310546:web:f80e45720cba435258a6cb"
    }

    const app = initializeApp(firebaseConfig)
    const firestore = getFirestore(app)


    return (
        <div className={"app"}>
            <RouteSwitch>
                <Header />
            </RouteSwitch>
        </div>
    )
}

export default App;
