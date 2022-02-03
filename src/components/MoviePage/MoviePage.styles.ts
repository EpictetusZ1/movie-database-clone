import styled from "styled-components";

export const MoviePage = styled.div`
  background-color: #FFF;
  min-height: 100vh;
  height: auto;

  ul {
    padding: 0;
    list-style: none;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 1px;
    
    li {
      display: inline-block;
      padding: 0 5px;
    }
  }
`

export const MovieAboveFold = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #202020;
  display: flex;
  justify-content: center;
`

export const MainContent = styled.div`
  width: 85vw;
  height: auto;
  
   h1 {
     font-weight: 400;
     font-size: 3.5rem;
     margin: 1.2rem 0;
   }
`

export const MoviePageHero = styled.div`

  .mediaContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
  }


  .posterContainer {
    img {
      height: 360px;
      width: auto;
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
    font-size: 1.2em;
    line-height: 1.2em;
    width: 65%;
  }

  .ctaCont {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 5px;
    
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
}
`
