import styled from "styled-components";

export const ScreenOverlay = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`

export const AddReview = styled.div`
  height: 100vh;
  width: 500px;
  background-color: #FFF;
  margin: 0;
  font-weight: 400;
  position: absolute;
  z-index: 11;
  top: 0;
  right: 0;


  .addHeader {
    top: 0;
    background-color: #F3F3F3;
    width: 100%;
    padding: 1rem 0.5rem;

    .hrSmall {
      border: 1px solid rgba(0, 0, 0, 0.5);
      width: 95%;
      margin-right: 5%;
    }
  }

  .hrBold {
    border: 2px solid rgba(0, 0, 0, 0.6);
    margin: 0 0 0 -5%;
    width: 525px;
    position: absolute;
    overflow: hidden;
  }
  
  .yourReview {
    padding: 0.8rem 0 0.5rem 0;
    font-family: "Roboto Light", sans-serif;
    font-size: 0.9em;
  }
`

export const ReviewSliderContainer = styled.div`
  display: flex;
  justify-content: center;
    img {
      height: 24px;
      width: auto;
    }

`