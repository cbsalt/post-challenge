import styled from 'styled-components';

export const Container = styled.div`
  background: #fdfdfd;

  > img {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 0;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;

  @media (max-width: 1050px) {
    grid-gap: 5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    align-content: center;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 500px;
      z-index: 0;

      @media (max-width: 1000px) {
        width: 400px;
      }

      @media (max-width: 900px) {
        display: none;
      }
    }
  }
`;

export const FormLogin = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  span {
    color: #f64c75;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    justify-content: center;
  }

  h2 {
    font-size: 2.9rem;
    text-transform: uppercase;
    margin: 15px 0;
    color: #333;

    @media (max-width: 1000px) {
      font-size: 2.4rem;
      margin: 8px 0;
    }
  }

  form {
    width: 360px;

    img {
      width: 100px;
    }

    @media (max-width: 1000px) {
      width: 290px;
    }

    button {
      display: block;
      width: 100%;
      height: 50px;
      border-radius: 25px;
      margin: 1rem 0;
      font-size: 1.2rem;
      border: none;
      background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      background-size: 200%;
      transition: 0.4s;

      &:hover {
        background-position: right;
      }
    }
  }
`;

export const EmailInput = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
  position: relative;
  height: 45px;

  input {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0 0.7rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #555;
  }
`;

export const PasswordInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
  position: relative;
  height: 45px;

  input {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: none;
    outline: none;
    background: none;
    padding: 0 0.7rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #555;
  }
`;
