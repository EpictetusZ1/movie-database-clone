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
      width: 90vw;
      padding: 0 0.75rem;
      margin: 0 auto;
      color: #FFF;
      
      input[type=text] {
        border: none;
        border-radius: 4px;
        width: 50%;
        padding: 10px 10px;
      }
      
      .navItems {
        display: flex;
        justify-content: center;
        width: 25%;
        
        a {
          height: 100%;
          width: 100%;
          color: #FFF;
          text-decoration: none;
          font-size: inherit;
          
          > p {
            padding: 4px 7px;
          }
          
        }
      }
  }
`

export const NavItem = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  width: auto;
  padding: 0.5rem;
  
  > p {
    padding: 4px 7px;
  }
  
  :hover {
    background-color: #2B2A2B;
    cursor: pointer;
  }
`