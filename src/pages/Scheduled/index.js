import React from 'react';

import Header from '../../components/Header';

import scheduled from '../../assets/scheduled.svg';

import { Container, SearchInput } from './styles';

export default function Posted() {
  return (
    <>
      <Header />
      <Container>
        <SearchInput>
          <h2>Agendados</h2>
          <input
            type="text"
            name="search"
            placeholder="O que você está procurando?"
          />
        </SearchInput>
        <div>
          <img src={scheduled} alt="scheduled" />
        </div>
      </Container>
    </>
  );
}
