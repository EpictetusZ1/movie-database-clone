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
  
  .movieInfoWrapper {
    background-color: #F3F3F3;
    width: 100%;
    max-height: 100px;
    display: flex;
    justify-content: center;
    float: left;
    height: 150px;
    padding: 0.5rem;
    margin-bottom: 15px;
  } 


  .addHeader {
    top: 0;
    background-color: #F3F3F3;
    width: 100%;
    padding: 1rem 0.5rem 0 0.5rem;
    
    img {
      position: absolute;
      z-index: 15;
      
    }

    .hrSmall {
      border: 1px solid rgba(0, 0, 0, 0.5);
      width: 95%;
      margin-right: 5%;
    }
  }

  .closeAdd {
    width: 1rem;
    height: 1rem;
    right: 1rem;
    top: 0.8rem;
    text-align: center;
    line-height: 0.95rem;
    font-family: Verdana, sans-serif;
    position: absolute;
    background-color: rgba(145, 145, 145, 0.8);
    padding: 0.25rem;
    border-radius: 50%;
    transition: background-color 0.2s ease-in;

    :hover {
      cursor: pointer;
      background-color: rgba(51, 51, 51, 0.5);
    }
  }

  .hrBold {
    border: 2px solid rgba(0, 0, 0, 0.6);
    width: 525px;
    position: absolute;
    overflow: hidden;
  }

  .yourRating {
    padding: 0.8rem 0 0.5rem 0;
    font-family: "Roboto Light", sans-serif;
    font-size: 0.9em;
  }

  .yourRatingCont {
    padding: 0 0.8rem;
    margin: 0.7rem 40% 0 0;
  }
  
  .yourReview {
    background-color: #F3F3F3;
    margin: 0.7rem 40% 0 0;
    padding: 0.8rem 0.5rem;
    width: 100%;
    font-family: "Roboto Light", sans-serif;
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  
  form {
    width: 100%;
    padding: 0 0.8rem;
    margin: 0.7rem 40% 0 0;

    input[type=text] {
      margin-top: 5px;
      width: 90%;
      padding: 0 5px;
      line-height: 1.2rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f8f8f8;
      resize: none;
      margin-bottom: 15px;
    }
    
    .submitBtn {
      background-color: #FAFBFC;
      border: 1px solid rgba(27, 31, 35, 0.15);
      border-radius: 6px;
      box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
      color: #24292E;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      margin-top: 10px;
      width: 95%;
      padding: 6px 5px;
      transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      vertical-align: middle;
      white-space: nowrap;
      word-wrap: break-word;
      
      :hover {
        background-color: #F3F4F6;
        text-decoration: none;
        transition-duration: 0.1s;
      }
    }

    :disabled {
      background-color: #FAFBFC;
      border-color: rgba(27, 31, 35, 0.15);
      color: #959DA5;
      cursor: default;
    }

    :active {
      background-color: #EDEFF2;
      box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
      transition: none 0s;
    }

    :focus {
      outline: 1px transparent;
    }

    :before {
      display: none;
    }
}

.reviewBodyContent {
  height: 500px;
  width: 90%;
  padding: 0.5rem 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
`

export const ReviewSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 0.25rem;

  img {
    height: 24px;
    width: auto;
    :hover {
      cursor: pointer;
    }
  }

  p {
    font-size: 1rem;
    line-height: .9rem;
  }

`