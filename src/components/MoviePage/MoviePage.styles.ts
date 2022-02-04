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
  // Add media query for content size restriction
  width: 70vw;
  max-width: 90vw;
  height: auto;
  
   h1 {
     font-weight: 400;
     font-size: 3.5rem;
     margin: 1.2rem 0;
   }
`
