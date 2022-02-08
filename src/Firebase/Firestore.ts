import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsl0ETHfI7m13ZH4ZwoEGodr268HoShJI",
    authDomain: "moviedatabaseclone.firebaseapp.com",
    projectId: "moviedatabaseclone",
    storageBucket: "moviedatabaseclone.appspot.com",
    messagingSenderId: "897684310546",
    appId: "1:897684310546:web:f80e45720cba435258a6cb"
}

const app = initializeApp(firebaseConfig)

export default getFirestore(app)