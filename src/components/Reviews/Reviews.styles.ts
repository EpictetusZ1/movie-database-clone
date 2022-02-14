import styled from "styled-components";

export const Reviews = styled.div`
  padding: 0.5rem 0;

  .allReviewHeader {
    width: 85%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      margin: 0.5rem 0;
    }

    .addReview {
      background-color: #5799EF;
      border: none;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      height: 75%;

      :hover {
        cursor: pointer;
      }
    }
    
  }
 
  .reviewContainer {
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    display: grid;
    grid-row-gap: 15px;
  }
  
`