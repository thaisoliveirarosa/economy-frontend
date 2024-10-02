import { useState } from 'react';
import './style.css'
import axios from 'axios';

export default function Signup() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const newObject = {
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha
    };

    axios.post('http://localhost:8080/user/create', newObject)
      .then((response) => {
        console.log('Object created successfully:', response.data);
      })
      .catch((error) => {
        console.error('There was an error creating the object:', error);
      });
  };

  return <form onSubmit={handleSubmit}>
    <div>
      <label>Nome</label>
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>E-email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label>Senha</label>
      <input
        type="password"
        name="senha"
        value={formData.senha}
        onChange={handleChange}
        required
      />
    </div>
    <button type="submit" className="submit-button">Criar Usuario</button>
  </form>
}