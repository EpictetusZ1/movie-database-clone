import styled from "styled-components";

export const WatchLater = styled.div`
  display: flex;
  padding: 0 0.5rem;
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

    :hover {
      cursor: pointer;
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
    width: 20%;
    
    :hover {
      cursor: pointer;
    }
  }


`