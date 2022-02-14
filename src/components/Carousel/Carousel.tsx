// React & Components
import React, {useEffect, useRef, useState} from 'react';
import MoviePreview from "../MoviePreview/MoviePreview";

// Styles & Assets
import * as S from "./Carousel.styles"
import forward from "../../assets/svgs/forwardIcon.svg"
import backward from "../../assets/svgs/backwardIcon.svg"

// Types
import {DivProps, ICarouselProps} from "../../types/Main.types";

const Carousel: React.FC<ICarouselProps> = ({movieArr, title, subTitle}) => {

    const scrollRef = useRef<HTMLDivElement>(null)
    const [showScrollBtn, setShowScrollButton] = useState<boolean>(true)
    let interValID: NodeJS.Timer

    const startScroll = (offset: number) => {
        interValID = setInterval(() => scroll(offset), 100)
    }

    const endScroll = () => clearInterval(interValID)

    useEffect(() => {
        return () => {
            endScroll()
        }
    }, [])

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

    const checkScreenWidth = () => {
        if (window.screen.width <= 1024) {
            setShowScrollButton(false)
        }
    }

    useEffect(() => {
        checkScreenWidth()
    }, [])

    return (
        <S.Carousel>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <CarouselContainer ref={scrollRef}>
                { showScrollBtn &&
                    <div className="backwardContainer"
                         onMouseDown={() => startScroll(-50)}
                         onMouseUp={() => endScroll()}
                         onMouseLeave={() => endScroll()}
                    >
                        <img src={backward}
                             className={"backward"}
                             alt="left scroll"
                        />
                    </div> }

                {movieArr.map( (item, index) => <MoviePreview key={item.id} movieInfo={item} index={index} /> )}

                { showScrollBtn &&
                    <div className="forwardContainer"
                         onMouseDown={() => startScroll(50)}
                         onMouseUp={() => endScroll()}
                         onMouseLeave={() => endScroll()}
                    >
                        <img src={forward}
                             className={"forward"}
                             alt="right scroll"
                        />
                    </div> }

            </CarouselContainer>
        </S.Carousel>
    );
}

export default Carousel;