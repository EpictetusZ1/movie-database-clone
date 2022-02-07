import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState} from "../redux/appStore/appTypes";
import {doc, getDoc, getFirestore, setDoc, updateDoc, collection} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {mapDBStateToRedux} from "../redux/appStore/appActions";

const Firebase = () => {
    const user = useSelector((state: IAppState) => state.user)
    const isSignedIn = useSelector((state: IAppState) => state.signedIn)
    const watchLater = useSelector((state: IAppState) => state.user.watchLater)

    const dispatch = useDispatch()

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

    const checkUserDoc = async() => {
        if (!user) return
        const userRef = doc(firestore, "users", `${user.user_id}`)
        const userSnapshot = await getDoc(userRef)

        const createUserDoc = async () => {
            if (!userSnapshot.exists()) {
                await setDoc(userRef, user)
                return user
            } else if (userSnapshot.exists()) {
                return userSnapshot.data()
            }
        }
        return createUserDoc()
    }

    useEffect(() => {
        if (isSignedIn) {
            checkUserDoc()
                .then( (r) => {
                    if (r) {
                        dispatch(mapDBStateToRedux(r.watchLater, r.reviews))
                    }
            })
        }
    }, [isSignedIn])

    const updateUserDataInFirebase = async () => {
        if (!user) return
        const usersRef = collection(firestore, "users") // COLLECTION
        const userRef = doc(usersRef, `${user.user_id}`);

        await updateDoc(userRef, {
            watchLater: watchLater
        })
    }

    useEffect(() => {
        updateUserDataInFirebase()
    }, [watchLater])

    return (
        <>
        </>
    );
};

export default Firebase;