import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IAppState} from "../redux/appStore/appTypes";
import {doc, getDoc, setDoc, updateDoc, collection} from "firebase/firestore";
import {mapDBStateToRedux} from "../redux/appStore/appActions";
import MyFirestore from "./Firestore";


const FireSUsers = () => {
    const user = useSelector((state: IAppState) => state.user)
    const isSignedIn = useSelector((state: IAppState) => state.signedIn)
    const watchLater = useSelector((state: IAppState) => state.user.watchLater)

    const dispatch = useDispatch()

    const checkUserDoc = async() => {
        if (!isSignedIn) return
        const userRef = doc(MyFirestore, "users", `${user.user_id}`)
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
                    if (r) dispatch(mapDBStateToRedux(r.watchLater, r.reviews))
            })
        }
    }, [isSignedIn])

    const updateUserInFirebase = async () => {
        if (!isSignedIn) return
        const usersRef = collection(MyFirestore, "users") // COLLECTION
        const userRef = doc(usersRef, `${user.user_id}`);

        await updateDoc(userRef, {
            watchLater: watchLater
        })
    }

    useEffect(() => {
        updateUserInFirebase()
    }, [watchLater])

    return (
        <>
        </>
    );
};

export default FireSUsers;