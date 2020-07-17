import React, { useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import parse from 'html-react-parser';

import Header from '../../components/Header';
import {
  Container,
  HeaderContent,
  Content,
  RichText,
  Post,
  SubmitPost,
} from './styles';

export default function Dashboard() {
  const [text, setText] = useState('');

  return (
    <Container>
      <Header />
      <HeaderContent>
        <input
          type="text"
          name="title"
          placeholder="Digite o título do seu post"
        />
        <select name="categories">
          <option value="text">Artigos</option>
          <option value="text">Pensamentos</option>
          <option value="text">Avisos</option>
          <option value="text">Conteúdos</option>
        </select>
      </HeaderContent>
      <Content>
        <RichText>
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </RichText>
        <Post>
          <h2>O que você está pensando?</h2>
          <div>
            <p>{parse(text)}</p>
          </div>
        </Post>
        <SubmitPost>
          <button className="submit-btn" type="submit">
            Postar
          </button>
          <div>
            <input type="date" name="scdl-date" />
            <input type="time" name="scdl-time" />
          </div>
          <button className="scdl-btn" type="submit">
            Agendar postagem
          </button>
        </SubmitPost>
      </Content>
    </Container>
  );
}
