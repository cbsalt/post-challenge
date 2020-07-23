import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
`;

export const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  grid-gap: 48px 36px;
  justify-items: center;
`;

export const Card = styled.div`
  padding: 16px;
  background: #fdfd96;
  width: 300px;
  min-height: 300px;

  header {
    font-weight: bold;
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 40% 40% 20%;
    align-items: center;

    h3 {
      margin-right: 24px;
    }

    button {
      border: none;
      background: none;
      text-align: right;
    }
  }

  div {
    margin-bottom: 24px;

    h2 {
      font-size: 24px;
    }
  }
`;
