import styled from "styled-components";

export const ReviewItem = styled.div`
  background-color: rgba(255, 255, 255, 0.52);
  width: 90%;
  height: 150px;
  border-radius: 20px;
  padding: 1rem;
  position: relative;

  .editBtn {
    height: 1.5rem;
    text-align: center;
    margin-left: 25px;
    width: fit-content;
    position: absolute;
    right: 2rem;
    background-color: #5799EF;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    letter-spacing: 1px;

    :hover {
      cursor: pointer;
    }
  }

  .reviewHeader {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
  }

  .ratingContainer {
    width: 70%;
    height: 24px;
    display: inline-flex;
    align-items: center;
  }

  .goldStar {
    width: 24px;
    height: 24px;
    padding: 0 0 2px 0;
    margin-right: 5px;
  }

  .reviewHeadline {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .reviewContent {
    font-family: "Roboto Light", sans-serif;
    margin-top: 10px;
  }
`
