import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';

export default function Receita() {

  const [receitas, setReceitas] = useState([])

  async function getReceitas() {
    const response = await axios.get('http://localhost:8080/receita');
    setReceitas(response.data)
  }

  useEffect(() => {
    getReceitas()
  }, [])

  return (
    <div className="table-container">
      <h2>Lista de Receitas</h2>
      {receitas.length > 0 ? (
        <table>
        <thead>
          <tr>
            <th>Drescrição</th>
            <th>Categoria</th>
            <th>Valor</th>
        </tr>
       </thead>
       <tbody>
        {receitas.map(receita => (
          <tr key={receita.id}>
            <td>{receita.descricao}</td>
            <td>{receita.categoria}</td>
            <td>R$ {receita.valor.toFixed(2)}</td>
          </tr>
        ))}
       </tbody>
      </table>
    ) : (
      <p>Carregando receitas...</p>
    )}
  </div>
  );
}
        