import React, {useEffect} from 'react';
import iconSmall from "../../assets/svgs/image-icon-small.svg";
import * as S from  "./Header.styles"
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUserData, setSignedOut} from "../../redux/appStore/appActions";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";

const Header = () => {

    const auth = getAuth()
    const [user] = useAuthState(auth)
    const dispatch = useDispatch()

    useEffect(() => {
        const updateUserData = () => {
            if (user) {
                const uid = user.uid
                dispatch(setUserData(uid))
            }
        }
        updateUserData()
    }, [user])

    const SignIn: React.FC = () => {

        const singInWithGoogle = () => {
            const provider = new GoogleAuthProvider()

            signInWithPopup(auth, provider)
                .catch( (error) => {
                    console.log("Error", error.code, error.message)
                })
        }
        return (
            <S.NavItem onClick={() => singInWithGoogle()}>
                <p>Sign In With Google</p>
            </S.NavItem>
        )
    }

    const SignOut: React.FC = () => {
        return auth.currentUser && (
            <S.NavItem onClick={() => {
                auth.signOut()
                    .then( () => dispatch( setSignedOut()) )
            }}>
                <p>Sign Out</p>
            </S.NavItem>
        )
    }

    const ProfileLink: React.FC = () => {
        return auth.currentUser && (
            <S.NavItem>
                <Link to={"/profile"}>
                    <p>Profile</p>
                </Link>
            </S.NavItem>
        )
    }

    const WatchList: React.FC = () => {
        return auth.currentUser && (
            <S.NavItem>
                <p>Watchlist</p>
            </S.NavItem>
        )
    }

    return (
        <S.Header>
            <div className="navInner">
                <Link to={"/"}>
                    <img src={iconSmall} alt="Movie Database"/>
                </Link>
                Menu
                <input type="text" placeholder={"Search IMDb"}/>

                <div className="navItems">
                    { user ? <ProfileLink /> : <SignIn/> }
                    <SignOut />
                    <WatchList />
                </div>
            </div>
        </S.Header>
    );
};

export default Header;