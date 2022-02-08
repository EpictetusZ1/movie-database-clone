import styled from "styled-components";

export const HeroHeader = styled.div`
  
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  h1 {
    margin: 10px 0;
  }

  .titleContainer {
    ul {
      li:not(:first-child) {
        :before{
          opacity: 0.7;
          content:"•";
          font-size:10pt;
        }
      }

      li span {
        position: relative;
        left: 5px;
      }
    }
  }
  
  .popularityContainer {
    height: 60%;
    min-width: 35%;
    width: auto;
    max-width: 85%;
    float: right;
    color: #FFF;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 1350px) {
    .popularityContainer {
      width: 45vw;
    }
  }
  
  .rating {
    width: 25%;
    > img {
      padding: 5px 10px 0 0 ;
    }
  }
  
  .popularCat {
    opacity: 0.7;
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
  
  .ratingValue {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  
  .value {
    font-size: 1.3em;
  }
  
  .outOf {
    font-family: "Roboto Light", sans-serif;
    opacity: 0.8;
  }
  
  .yourRating {
    display: grid;
    place-items: center;
  }
  
  .personalRatingContainer {
    padding-top: 5px;
    width: 75%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    :hover {
      cursor: pointer;
    }
  }

  .rateNow {
    color: #5799ef;
    font-size: 1.5em;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    padding: 0 0.25rem;
  }

  .metaIcon {
    width: 25px;
    height: 25px;
  }
`

export const MoviePageHero = styled.div`

  .mediaContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .posterContainer {
    height: 360px;
    width: auto;
    border-right: 2px solid rgba(255, 255, 255, 0.7);

    > img {
      max-height: 100%;
    }

  }

  iframe {
    height: 360px;
    width: 640px;
  }

  .tags {
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    margin: 0;
    padding: 0.25rem 0;
    position: relative;
    overflow: hidden;

    li {
      border: 1px solid #FFF;
      border-radius: 2rem;
      padding: 6px 10px;
      margin: 0 5px;
    }

  }

  .heroBottomCont {
    width: 100%;
    height: 50%;
    display: flex;
  }

  .overView {
    color: #FFF;
    font-size: 1.1em;
    line-height: 1.2em;
    width: 65%;
    opacity: 0.9;
    font-family: "Roboto Light", sans-serif;
  }

  .ctaCont {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 15px;

    button {
      margin-bottom: 10px;
    }

    .showtime {
      background-color: #F5C517;
      font-size: 1rem;
      border-radius: 8px;
      border-style: none;
      box-sizing: border-box;
      color: #000;
      width: 100%;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      text-align: left;
      line-height: 20px;

      outline: none;
      padding: 10px 16px;
      position: relative;
      text-decoration: none;
      transition: color 100ms;
      vertical-align: baseline;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;

      span {
        padding: 0 0.5rem;
      }

    }

    .showtime:hover,
    .showtime:focus {
      background-color: #e5bd2d;
    }
  }

  .watchlistHero {
    display: flex;
    align-items: center;
    color: #FFF;
    background-color: #313131;
    border-radius: 8px;
    padding: 10px 16px;
    width: auto;
    transition: background-color 0.2s ease-in-out;

    :hover {
      cursor: pointer;
      background-color: #494949;
    }
  }
`

export const SecondaryData = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .dataSection {
    padding: 15px 0;
    width: 95%;
    display: inline-flex;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .jobTitle {
    font-size: 1.2em;
    color: #FFF;
    padding: 0
  }

  .personName {
    padding: 0 0 0 15px;
    font-size: 1em;
    color: #5799ef;

    :hover {
      cursor: pointer;
    }
  }


`