import React from 'react';
import iconSmall from "../../assets/svgs/image-icon-small.svg";
import * as S from  "./Header.styles"

const Header = () => {
    return (
        <S.Header>
            <div className="navInner">
                <img src={iconSmall} alt="Movie Database"/>
                Menu
                <input type="text" placeholder={"Search IMDb"}/>
                Watch list
                &nbsp;
                Sign in

            </div>
        </S.Header>
    );
};

export default Header;