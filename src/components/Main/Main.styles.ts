import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h3 {
    color: #F5C517;
    font-size: 2rem;
    margin-right: 50%;
  }
  
  nav {
    background-color: #121212;
    width: 100%;
    padding: 0.25rem;
    margin: 0 auto;
    position: relative;
    min-height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    .navInner {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100vw;
      padding: 0 0.75rem;
      margin: 0 auto;
      color: #FFF;
    }
    
  }
`
