import styled from "styled-components";

export const ProfilePage = styled.div`
  background-color: #E3E2DD;
  width: 100vw;
  display: flex;
  justify-content: center;
  
  h2 {
    margin: 0.5rem 0;
  }
  
  .mainContent {
    height: auto;
    min-height: 100vh;
    width: 65vw;
    background-color: #F0F0F0;
    padding: 0.5rem;
  }

  .watchlistContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }

  hr {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0;
    height: 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
  } 
`