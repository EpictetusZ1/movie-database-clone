import React from 'react';
import * as S from "./Carousel.styles"
import forward from "../../assets/forwardIcon.svg"
import {ICarouselProps} from "../../types/types";

const Carousel: React.FC<ICarouselProps> = ({children}) => {

    return (
        <S.Carousel>
            {children}
            <div className="forwardContainer">
                <img
                    src={forward}
                    className={"forward"}
                    alt="right scroll"
                />
            </div>
        </S.Carousel>
    );
};

export default Carousel;