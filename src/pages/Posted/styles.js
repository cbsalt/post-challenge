import styled from 'styled-components';

export const Container = styled.div`
  background: #fdfdfd;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 2rem;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  }

  img {
    width: 500px;
    z-index: 0;

    @media (max-width: 1000px) {
      width: 400px;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const SearchInput = styled.div`
  justify-content: center;
  align-items: center;
  max-height: 50vh;

  @media (max-width: 900px) {
    justify-content: center;
  }

  h2 {
    font-size: 2.9rem;
    text-transform: uppercase;
    color: #333;
    text-align: center;
  }

  input {
    width: 80%;
    padding: 0 40px;
    margin-top: 36px;
    height: 32px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #555;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
  }
`;
