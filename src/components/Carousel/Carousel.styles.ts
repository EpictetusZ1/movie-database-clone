import styled from "styled-components";

export const Carousel = styled.div`
  width: 90%;

  @media only screen and (min-width: 1500px) {
    width: 85%;
  }

  @media only screen and (min-width: 1600px) {
    width: 75%;
  }

  h3 {
    margin: 24px 0 0 0;
  }

  h4 {
    color: #FFF;
    font-size: 1.8rem;
    margin: 24px 0 24px 0;
  }
  
}

.carouselContainer {
  position: relative;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  width: 100%;
  display: grid;
  grid-template-columns: none;
  grid-auto-columns: calc(8.33333% - .91667 * 1rem - 0rem);
  grid-auto-flow: column;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

}

.forwardContainer {
  position: sticky;
  right: 0;
  top: 25%;
  height: 66px;
  width: 50px;
  background-color: rgba(18, 18, 18, 0.49);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  :hover, :Active {
    background-color: rgba(18, 18, 18, 0.55);
    .forward {
      filter: brightness(0) saturate(100%) invert(85%) sepia(31%) saturate(4062%) hue-rotate(350deg) brightness(109%) contrast(92%);
    }
  }

  .forward {
    position: absolute;
    top: calc(50% - 12px); // Height of icon
    right: calc(50% - 12px);
  }

}

.backwardContainer {
  position: sticky;
  z-index: 100;
  left: 0;
  top: 25%;
  height: 66px;
  width: 50px;
  background-color: rgba(18, 18, 18, 0.49);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  cursor: pointer;
  user-select: none;

  :hover, :Active {
    background-color: rgba(18, 18, 18, 0.55);

    .backward {
      filter: brightness(0) saturate(100%) invert(85%) sepia(31%) saturate(4062%) hue-rotate(350deg) brightness(109%) contrast(92%);
    }
  }

  .backward {
    position: absolute;
    top: calc(50% - 12px); // Height of icon
    left: calc(50% - 12px);
  }

`