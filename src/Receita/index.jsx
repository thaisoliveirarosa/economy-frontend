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
    <div>
      <p>Lista de Receitas</p>
      {
        receitas.map(receita => (
          <>
            {receita.descricao} / {receita.categoria} / {receita.valor}
            <br />
          </>
        ))}
    </div>
  );
}