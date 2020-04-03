import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import logoImg from '~/assets/logo.svg';
import api from '~/services/api';

export default function Register() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [whatsapp, setWhatsapp] = React.useState('');
  const [city, setCity] = React.useState('');
  const [uf, setuf] = React.useState('');

  function handleRegister(e) {
    e.preventDefault();
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Nao tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input value={name} placeholder="Nome da ONG" />
          <input value={email} type="email" placeholder="E-mail" />
          <input value={whatsapp} placeholder="WhatsApp" />

          <div className="input-group">
            <input value={city} placeholder="Cidade" />
            <input value={uf} placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
