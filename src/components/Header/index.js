import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiExitDoor } from 'react-icons/gi';

import { signOut } from '../../store/modules/auth/actions';

import avatar from '../../assets/avatar_login.svg';

import { Container, Avatar } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar>
        <img src={avatar} alt="avatar" className="avatar" />
        <Link to="/dashboard" />
      </Avatar>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/posted">Postados</Link>
        <Link to="/scheduled">Agendados</Link>
      </nav>
      <button type="button" onClick={handleSignOut}>
        <div>
          <GiExitDoor size={24} color="#fff" />
        </div>
        <span>Sign Up</span>
      </button>
    </Container>
  );
}
