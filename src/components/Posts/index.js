import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import parse from 'html-react-parser';

import { Container, GridList, Card } from './styles';

export default function Post({ posts, deletePost }) {
  return (
    <Container>
      <GridList>
        {posts.map((post) => (
          <Card key={post.id}>
            <header>
              <h3>Autor</h3>
              <h3>Tema: {post.category?.name}</h3>
              <button type="button" onClick={() => deletePost(post.id)}>
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

Post.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      category: PropTypes.shape({
        name: PropTypes.string,
      }),
    })
  ).isRequired,
  deletePost: PropTypes.func.isRequired,
};
