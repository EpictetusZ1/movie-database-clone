import styled from "styled-components";

export const WatchLater = styled.div`
  display: flex;
  font-family: "Roboto Light", sans-serif;

  > img {
    height: 85%;
    padding: 0.5rem 0.5rem 0 0;
  }

  .infoContainer {
    display: flex;
    height: auto;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 0.5rem;

    > a {
      text-decoration: none;
    }
  }

  .title {
    font-size: 1.5rem;
    color: #5799EF;
    font-family: Roboto, sans-serif;
    padding: 0.5rem 0;

    :hover {
      cursor: pointer;
    }
  }
  
  .ratingContainer {
    height: 1em;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    
    > img {
      height: 1em;
     padding: 0 5px; 
    }
  }

  .releaseDate {
    padding: 0.5rem 0;
    color: #000;
    opacity: 0.7;
    font-size: 0.9em;
    font-family: inherit;
  }

  .overview {
    width: 100%;
    line-height: 1.2em;
    margin-bottom: 10px;
  }

  .removeFromWatch {
    padding: 0.25rem 0;
    max-width: 24%;
    background-color: #9D9D9D;
    border-radius: 1rem;
    border: none;
    transition: background-color 0.2s ease-in-out;
    flex-grow: 0;

    :hover {
      cursor: pointer;
      background-color: #bdbdbd;
    }
  }


`