import styled from "styled-components";

export const ProfilePage = styled.div`
  background-color: #E3E2DD;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  
  .mainContent {
    height: auto;
    min-height: 100vh;
    width: 65vw;
    background-color: #F0F0F0;
    padding: 0.5rem 0 0 0; 
  }

  .watchlistContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`