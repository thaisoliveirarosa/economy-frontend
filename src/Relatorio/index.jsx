import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Grafico from './grafico';

export default function Relatorio() {
  const [despesas, setDespesas] = useState([]);
  const [receitas, setReceitas] = useState([]);

  async function getDespesas() {
    const token = localStorage.getItem("token");
    const axiosConfig = {
      headers: {
        "token": token,
      },
    };

    try {
      const response = await axios.get('http://localhost:8080/despesa', axiosConfig);
      setDespesas(response.data);
      const totalValor = response.data.reduce((acc, despesa) => acc + despesa.valor, 0);
      setTotalDespesas(totalValor);
    } catch (error) {
      console.error("Erro ao buscar despesas:", error);
    }
  }

  async function getReceitas() {
    const token = localStorage.getItem("token");
    const axiosConfig = {
      headers: {
        "token": token,
      },
    };

    try {
      const response = await axios.get('http://localhost:8080/receita', axiosConfig);
      setReceitas(response.data);
      const totalValor = response.data.reduce((acc, receita) => acc + receita.valor, 0);
      setTotalReceitas(totalValor);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  }

  useEffect(() => {
    getDespesas();
    getReceitas();
  }, []);

  return (
    <div className="table-container">
      <h1>Meus Relatórios</h1>
      <h2>Gráfico de Despesas e Receitas</h2>
      <Grafico despesas={despesas} receitas={receitas} />
    </div>
  );
}