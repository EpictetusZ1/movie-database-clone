import React, {useRef} from 'react';
import * as S from "./Carousel.styles"
import forward from "../../assets/svgs/forwardIcon.svg"
import backward from "../../assets/svgs/backwardIcon.svg"
import MoviePreview from "../MoviePreview/MoviePreview";
import {DivProps, ICarouselProps} from "../../types/Main.types";

const Carousel: React.FC<ICarouselProps> = ({movieArr}) => {

    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (scrollOffset: number) => {
        if (scrollRef.current !== null) {
            scrollRef.current.scrollLeft += scrollOffset
        }
    }

    const CarouselContainer = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => {
        return (
            <div ref={ref} className={"carouselContainer"}>
                {props.children}
            </div>
        )
    })

    return (
        <S.Carousel>
            <h3>Watch To Watch</h3>
            <h4>Top Picks </h4>

            <CarouselContainer ref={scrollRef}>
                <div className="backwardContainer"
                     onClick={() => {
                         scroll(-100)
                     }}
                >
                    <img src={backward}
                         className={"backward"}
                         alt="left scroll"/>
                </div>

                {movieArr.map( (item) => <MoviePreview key={item.id} movieInfo={item} /> )}

                <div className="forwardContainer"
                     onClick={() => {
                         scroll(100)
                     }}
                >
                    <img src={forward}
                         className={"forward"}
                         alt="right scroll"/>
                </div>

            </CarouselContainer>
        </S.Carousel>
    );
}

export default Carousel;