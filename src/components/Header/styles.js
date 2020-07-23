import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  font-size: 24px;

  @media (max-width: 900px) {
    justify-content: center;
    display: grid;
  }

  nav {
    display: flex;

    @media (max-width: 900px) {
      display: grid;
      justify-items: center;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    a {
      margin: 0 16px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  button {
    background: #f64c75;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    border: none;

    @media (max-width: 900px) {
      justify-self: center;
    }

    span {
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      text-transform: uppercase;
      margin: 0 8px;
    }
  }
`;

export const Avatar = styled.div`
  img {
    width: 96px;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;
