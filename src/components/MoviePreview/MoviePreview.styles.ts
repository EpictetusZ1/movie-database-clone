import styled from "styled-components";

export const PreviewWrapper = styled.div`
  height: 424px;
  width: 10rem;
  background-color: #1A1A1A;
  color: #FFF;
  position: relative;
  border-radius: 0 0 4px 4px;
  
  // This component sits in a css grid from Carousel.tsx
  grid-column: span 2;

  @media only screen and (max-width: 1400px) {
    grid-column: span 3;
    margin: 0 2em 0 0;
  }

  @media only screen and (max-width: 1200px) {
    grid-column: span 4;
    margin: 0 2em 0 0;
  }
  
  .watchListAdd {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    width: 2rem;
    height: 2.6rem;
    z-index: 3;
    opacity: 0.8;
    cursor: pointer;
    transition: opacity 100ms;

    :hover,
    :focus {
      opacity: 1;
    }
    
    .ribbonContainer {
      display: grid;
      place-items: center;
      height: 32px;
      width: auto;
    }
    
    .ribbon {
      position: absolute;
      top: 0;
      left: 0;
      width: 32px;
      height: auto;
    }
    
    .addIcon {
      width: 24px;
      height: 24px;
      z-index: 5;
    }
  }
`

export const PreviewImage = styled.div`
  a {
    text-decoration: none;
    color: #FFF;
    font-family: inherit;
    letter-spacing: .03125em;
    font-weight: 400;
    
    img {
      width: 100%;
    }
  }
`

export const MoviePreview = styled.div`
  .previewInfo {
    padding: 0.5em 0;

    .ratingContainer {
      display: inline-flex;
      align-items: center;
      position: relative;
      padding: 0 0.5rem 0.5rem 0.5rem;

      img {
        height: 0.9em;
        width: 1em;
        margin-right: 0.3em;
      }

      .rating {
        line-height: 1em;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  
  .movieTitle {
    padding: 0.25rem 0.5rem;
    font-size: 1rem;
    font-weight: bolder;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 2em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    
  }
`

export const ActionsContainer = styled.div`
  height: 28%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  
  .bottomActions {
    display: flex;
    justify-content: space-around;
    width: 95%;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem 0; 
    margin-top: 0.7rem;
    margin-bottom: -0.5rem;
    
    .trailer {
      display: inline-flex;
      align-items: center;
    }
  }
`

export const AddWatchlistBtn = styled.button`
  background-color: rgba(255,255,255,0.08);
  border-radius: 6px;
  border-style: none;
  box-sizing: border-box;
  color: #5799ef;
  cursor: pointer;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  height: 36px;
  width: 90%;
  line-height: 24px;
  margin: 0;
  outline: none;
  padding: 5px 16px 5px 0;
  position: relative;
  text-decoration: none;
  transition: opacity 100ms;
  user-select: none;
  touch-action: manipulation;

  :hover,
  :focus {
    opacity: 0.9;
  }
`