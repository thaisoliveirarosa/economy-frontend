import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

export default function Despesa() {

  const [despesas, setDespesas] = useState([])

  async function getDespesas() {
    const response = await axios.get('http://localhost:8080/despesa');
    setDespesas(response.data)
  }

  useEffect(() => {
    getDespesas()
  }, [])

  return (
    <div className="table-container">
      <h2>Lista de Despesas</h2>
      {despesas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Drescrição</th>
              <th>Categoria</th>
              <th>Valor</th>
          </tr>
         </thead>
         <tbody>
          {despesas.map(despesa => (
            <tr key={despesa.id}>
              <td>{despesa.descricao}</td>
              <td>{despesa.categoria}</td>
              <td>R$ {despesa.valor.toFixed(2)}</td>
            </tr>
          ))}
         </tbody>
        </table>
      ) : (
        <p>Carregando despesas...</p>
      )}
    </div>
    );
  }