import styled from 'styled-components';

export const Container = styled.div`
  background: #fdfdfd;
`;

export const HeaderContent = styled.div`
  display: grid;
  padding: 0 2rem;
  max-width: 44vw;
  margin: 24px 0 16px;

  input {
    height: 32px;
    margin-bottom: 16px;
    font-size: 16px;
    border: none;
  }

  select {
    height: 32px;
    font-size: 16px;
    border: none;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 96px;
  padding: 0 2rem;

  span {
    font-size: 20px;
  }
`;

export const RichText = styled.div`
  max-width: 44vw;

  div {
    height: 240px;
  }
`;

export const Post = styled.div`
  h2 {
    font-weight: bold;
    margin: 0 0 12px 24px;
    font-size: 22px;
  }

  div {
    background: #fff;
    height: 236px;
    max-width: 42vw;
    overflow-wrap: break-word;
    line-height: 1.3;
    overflow-y: scroll;
    border: solid 1px #c9c9c9;
    border-radius: 4px;
    padding: 8px 8px 0;
  }
`;

export const SubmitPost = styled.div`
  margin: 16px 0;

  button.submit-btn {
    width: 100%;
    margin-bottom: 32px;
    height: 50px;
    border-radius: 25px;
    font-size: 1.2rem;
    color: #fff;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    background-size: 200%;
    transition: 0.4s;

    &:hover {
      background-position: right;
    }
  }

  button.scdl-btn {
    width: 100%;
    margin-bottom: 32px;
    height: 50px;
    border-radius: 25px;
    font-size: 1.2rem;
    color: #fff;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    background-image: linear-gradient(to right, #6a5acd, #6a5afd, #6a5acd);
    background-size: 200%;
    transition: 0.4s;

    &:hover {
      background-position: right;
    }
  }

  > div {
    display: flex;
    place-content: space-between;
    margin-bottom: 16px;

    input {
      width: 45%;
      height: 32px;
      font-size: 16px;
      border: none;
      border-bottom: solid 1px #d1d1d1;
      background: none;
    }
  }
`;
