import React, {useEffect} from 'react';
import iconSmall from "../../assets/svgs/image-icon-small.svg";
import * as S from  "./Header.styles"
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setUserData, setSignedIn, setSignedOut} from "../../redux/appStore/appActions";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {IAppState} from "../../redux/appStore/appTypes";

const Header = () => {

    const isSignedIn = useSelector((state: IAppState) => state.signedIn)

    const auth = getAuth()
    const [user] = useAuthState(auth)
    const dispatch = useDispatch()

    useEffect(() => {
        const updateUserData = () => {
            if (user) {
                const uid = user.uid
                dispatch(setUserData(uid))
                dispatch(setSignedIn())
            } else {
                dispatch(setUserData("guest"))
                dispatch(setSignedOut())
            }
        }

        updateUserData()
    }, [user])

    const SignIn: React.FC = () => {
        const singInWithGoogle = () => {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .catch((error) => {
                    const errorCode = error.code
                    const errorMessage = error.message
                    console.log("Error", errorCode, errorMessage)
                })
        }
        return (
            <S.SignIn onClick={singInWithGoogle}>
               Sign In With Google
            </S.SignIn>
        )
    }

    const SignOut = () => {
        return auth.currentUser && (
            <div onClick={() => auth.signOut()}>
                Sign out
            </div>
        )

    }

    return (
        <S.Header>
            <div className="navInner">
                <Link to={`/`}>
                    <img src={iconSmall} alt="Movie Database"/>
                </Link>
                Menu
                <input type="text" placeholder={"Search IMDb"}/>

                { user ? <div>Profile</div> : <SignIn/> }
                <SignOut />

                Watchlist
            </div>
        </S.Header>
    );
};

export default Header;