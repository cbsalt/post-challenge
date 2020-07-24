import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import api from '../../services/api';

import Header from '../../components/Header';
import Posts from '../../components/Posts';

import posted from '../../assets/posted.svg';

import { Container, SearchInput } from './styles';

export default function Posted() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');

      const { data } = response;

      setCategories(data);
    }

    async function loadPosts() {
      const response = await api.get('posts', {
        params: {
          q: search,
        },
      });

      const { data } = response;

      const newPosts = data.map((post) => {
        return {
          ...post,
          category: categories.find(
            (category) => category.id === post.id_category
          ),
        };
      });

      setPosts(newPosts);
    }
    loadCategories();
    loadPosts();
  }, [search, categories]);

  async function handleDelete(id) {
    const modal = withReactContent(Swal);

    modal
      .fire({
        title: 'Você tem certeza que quer excluir?',
        text: 'Você não poderá reverter isso!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#32be8f',
        cancelButtonColor: '#f64c75',
        confirmButtonText: 'Sim, exclua!',
      })
      .then((result) => {
        if (result.value) {
          api.delete(`posts/${id}`);

          Swal.fire('Excluído!', 'Seu post foi deletado.', 'success');
        }
      });

    setPosts(posts.filter((post) => post.id !== id));
  }

  async function searchPost(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Header />
      <Container>
        <SearchInput>
          <h2>Postados</h2>
          <div>
            <input
              onKeyDown={searchPost}
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
      <Posts posts={posts} deletePost={handleDelete} />
    </>
  );
}
