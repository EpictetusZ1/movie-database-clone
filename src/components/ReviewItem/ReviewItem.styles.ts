import styled from "styled-components";

export const ReviewItem = styled.div`
  background-color: rgba(255, 255, 255, 0.52);
  width: 100%;
  height: 150px;
  border-radius: 0.5rem;
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  .reviewHeader {
    display: inline-flex;
    padding: 1rem 1rem 1rem 0;
  }
  
  .editBtn {
    height: 1.5rem;
    text-align: center;
    width: auto;
    flex-grow: 0;
    margin-left: 25px;
  }
  
 .reviewHeadline {
   font-size: 1.4rem;
   font-weight: 500;
   padding-bottom: 2rem;
 } 

`