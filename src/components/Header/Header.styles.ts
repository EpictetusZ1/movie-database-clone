import styled from "styled-components";

export const Header = styled.nav`
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
      
      input[type=text] {
        border: none;
        border-radius: 4px;
        width: 50%;
        padding: 10px 10px;
      }

  }

`