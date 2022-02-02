import styled from "styled-components";

export const Carousel = styled.div`
  position: relative;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  width: 95%;
  display: grid;

  grid-template-columns: none;
  grid-auto-columns: calc(8.33333% - .91667 * 1rem - 0rem);
  grid-auto-flow: column;

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

`