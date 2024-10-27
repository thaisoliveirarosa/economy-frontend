import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

export default function DespesaForm() {
  const [formData, setFormData] = useState({
    descricao: '',
    valor: '',
    data: '',
    categoria: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const newObject = {
      descricao: formData.descricao,
      valor: parseFloat(formData.valor),
      data: new Date(formData.data),
      categoria: formData.categoria
    };

    const token = localStorage.getItem("token");
    const axiosConfig = {
      headers: {
        "token": token
      }
    };

    axios.post('http://localhost:8080/despesa', newObject, axiosConfig)
      .then((response) => {
        console.log('Object created successfully:', response.data);
        window.location.href = "/despesa";
      })
      .catch((error) => {
        console.error('There was an error creating the object:', error);
      });
  };

  return (
    <div className="form-container">
      <h2>Criar Despesa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Descrição:</label>
          <input
            type="text"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Valor:</label>
          <input
            type="number"
            step="0.01"
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Data:</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Categoria:</label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Criar Despesa</button>
      </form>
    </div>
  );
};