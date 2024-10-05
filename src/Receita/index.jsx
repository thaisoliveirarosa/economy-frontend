import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';

export default function Receita() {

  const [receitas, setReceitas] = useState([])
  const [total, setTotal] = useState(0)

  async function getReceitas() {
    const token = localStorage.getItem("token");
    const axiosConfig = {
      headers: {
        "token": token
      }
    };
    console.log("TOKEEEN: ", token);

    const response = await axios.get('http://localhost:8080/receita', axiosConfig);
    setReceitas(response.data);
    const totalValor = response.data.reduce((acc, receita) => acc + receita.valor, 0);
    setTotal(totalValor);
  }

  useEffect(() => {
    getReceitas()
  }, [])

  return (
    <div className="table-container">
      <h2>Lista de Receitas</h2>
      {receitas.length > 0 ? (
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
            {receitas.map(receita => (
              <tr key={receita.id}>
                <td>{new Date(receita.data).toLocaleDateString('pt-BR')}</td>
                <td>{receita.descricao}</td>
                <td>{receita.categoria}</td>
                <td>R$ {receita.valor.toFixed(2)}</td>
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
        <p>Carregando receitas...</p>
      )}
    </div>
  );
}
