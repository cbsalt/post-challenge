import React from 'react';
import { GiExitDoor } from 'react-icons/gi';

import avatar from '../../assets/avatar_login.svg';

import { Container, Avatar } from './styles';

function Header() {
  return (
    <Container>
      <Avatar>
        <img src={avatar} alt="avatar" className="avatar" />
      </Avatar>
      <div>
        <ul>Postados</ul>
        <ul>Agendados</ul>
      </div>
      <button type="button">
        <div>
          <GiExitDoor size={24} color="#fff" />
        </div>
        <span>Sign Up</span>
      </button>
    </Container>
  );
}

export default Header;
