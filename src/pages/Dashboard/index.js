import React, { useState, useEffect } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';

import api from '../../services/api';

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
  const [subjectSelected, setSubjectSelected] = useState([1]);
  const [subjects, setSubjects] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const created_at = new Date().toISOString();

  useEffect(() => {
    async function Categories() {
      const response = await api.get('categories');

      const { data } = response;

      setSubjects(data);
    }

    Categories();
  }, []);

  const handleChange = (e) => {
    setSubjectSelected(e.target.value);
  };

  const sendPost = async () => {
    try {
      await api.post('posts', {
        title,
        text,
        id_category: Number(subjectSelected),
        date: created_at,
      });

      setTitle('');
      setText('');

      toast.success('Postagem realizada com sucesso!');
    } catch (err) {
      toast.error('Erro ao realizar a postagem, tente novamente');
    }
  };

  return (
    <>
      <Header />
      <Container>
        <HeaderContent>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="Digite o título do seu post"
          />
          <select name="select" onChange={handleChange}>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
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
              <span>{parse(text)}</span>
            </div>
          </Post>
          <SubmitPost>
            <button className="submit-btn" type="submit" onClick={sendPost}>
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
    </>
  );
}
