import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import parse from 'html-react-parser';

import api from '../../services/api';

import { Container, GridList, Card } from './styles';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const response = await api.get('posts');

      const { data } = response;

      setPosts(data);
    }

    loadPosts();
  }, []);

  async function handleDelete(id) {
    await api.delete(`posts/${id}`);

    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <Container>
      <GridList>
        {posts.map((post) => (
          <Card key={post.id}>
            <header>
              <h3>Autor</h3>

              <h3>Tema: {post.id_category}</h3>
              <button type="button" onClick={() => handleDelete(post.id)}>
                <MdClose size={32} color="#f64c75" />
              </button>
            </header>
            <div>
              <h2>{post.title}</h2>
            </div>
            <span>{parse(post.text)}</span>
          </Card>
        ))}
      </GridList>
    </Container>
  );
}
