import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

export default function Despesa() {

  const [despesas, setDespesas] = useState([])
  const [total, setTotal] = useState(0)

  async function getDespesas() {
    const token = localStorage.getItem("token");
    const axiosConfig = {
      headers: {
        "token": token
      }
    };

    const response = await axios.get('http://localhost:8080/despesa', axiosConfig);
    setDespesas(response.data);
    const totalValor = response.data.reduce((acc, despesa) => acc + despesa.valor, 0);
    setTotal(totalValor);
  }

  useEffect(() => {
    getDespesas()
  }, [])

  return (
    <div className="table-container">
      <h2>Lista de Despesas</h2>
      {despesas.length > 0 ? (
        <div>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Drescrição</th>
              <th>Categoria</th>
              <th>Valor</th>
          </tr>
         </thead>
         <tbody>
          {despesas.map(despesa => (
            <tr key={despesa.id}>
              <td>{new Date(despesa.data).toLocaleDateString('pt-BR')}</td>
              <td>{despesa.descricao}</td>
              <td>{despesa.categoria}</td>
              <td>R$ {despesa.valor.toFixed(2)}</td>
            </tr>
          ))}
         </tbody>
        </table>
        <tfoot>
        <div className="total-container">
        <td>Total = R$ {total.toFixed(2)}</td>
        </div>
        </tfoot>
        </div>
      ) : (
        <p>Carregando despesas...</p>
      )}
    </div>
    );
  }