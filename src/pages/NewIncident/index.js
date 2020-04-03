import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '~/assets/logo.svg';

import api from '~/services/api';

export default function NewIncident() {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [value, setValue] = React.useState('');

  const history = useHistory();
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('erro ao cadastrar caso, tente novamente');
    }
  }

  return (
    <>
      <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero" />
            <h1>Cadastrar novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um herói que possa
              lhe ajudar
            </p>
            <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#e02041" />
              Voltar para pagina inicial
            </Link>
          </section>

          <form onSubmit={handleNewIncident}>
            <input
              onChange={e => setTitle(e.target.value)}
              value={title}
              placeholder="Titulo do caso"
            />
            <textarea
              onChange={e => setDescription(e.target.value)}
              value={description}
              placeholder="Descricao"
            />
            <input
              onChange={e => setValue(e.target.value)}
              value={value}
              placeholder="Valor em reais"
            />

            <button className="button" type="submit">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
