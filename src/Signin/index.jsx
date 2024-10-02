import { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';

export default function Signin() {

  const [formData, setFormData] = useState({
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
      email: formData.email,
      senha: formData.senha
    };

    axios.post('http://localhost:8080/user/login', newObject)
      .then((response) => {
        console.log('Object created successfully:', response.data);
        localStorage.setItem("token", response.data.token);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error('There was an error creating the object:', error);
      });
  };

  useEffect(() => {
    console.log("TOKEN: ", localStorage.getItem("token"));
  }, [])

  return <form onSubmit={handleSubmit}>
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
    <button type="submit" className="submit-button">Logar</button>
  </form>
}