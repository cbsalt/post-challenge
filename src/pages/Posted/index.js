import React from 'react';

import Header from '../../components/Header';
import Posts from '../../components/Posts';

import posted from '../../assets/posted.svg';

import { Container, SearchInput } from './styles';

export default function Posted() {
  return (
    <>
      <Header />
      <Container>
        <SearchInput>
          <h2>Postados</h2>
          <div>
            <input
              type="text"
              name="search"
              placeholder="O que você está procurando?"
            />
          </div>
        </SearchInput>
        <div>
          <img src={posted} alt="posted" />
        </div>
      </Container>
      <Posts />
    </>
  );
}
