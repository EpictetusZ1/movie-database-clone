import styled from "styled-components";

export const MoviePage = styled.div`
  background-color: #FFF;
  min-height: 120vh;
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

  .additionalDetails {
    padding: 0.5rem 2rem;
    min-height: 50vh;
    background-color: #E3E2DD;
    
     > h1 {
       color: #000;
       margin: 0.25rem 0;
     }
  }
`

export const MovieAboveFold = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #202020;
  display: flex;
  justify-content: center;
`

export const MainContent = styled.div`
  width: 70vw;
  max-width: 90vw;
  height: auto;
  
   h1 {
     font-weight: 400;
     font-size: 3.5rem;
     margin: 1.2rem 0;
   }
`
