import React, { useState } from 'react';
import axios from 'axios';

const Home2 = () => {

  const baseUrl = 'http://localhost:4200';

  const [item, setitem] = useState([]);
  const [select, setSelect] = useState('');
  const [endPoint, setEndPoint] = useState('');
  console.log(select);

  const getItems = () => {
    const item = axios.get(`${baseUrl}${endPoint}`);
    setitem(item.data);
  }

  const getEndPoint = (select) => {
    if (select === "Funcionarios") {
      setEndPoint('/funcionarios')
    }
  }

  return (
    <div className="container">
      <div className="row">
        <select className="form-control text-center" name="select" id="idSelect" onChange={(e) => {
          setSelect(e.target.value)
        }} >
          <option value="Produtos">Produtos</option>
          <option value="Estoque">Estoque</option>
          <option value="Funcionarios">Funcionarios</option>
          <option value="Unidades">Unidades</option>
          <option value="Categoria">Categoria</option>
        </select>
      </div>
      <div className='container row' >
        <table className="table table-striped table-hover table-bordered border-dark mt-3">
          <thead>
            {
              select == "Funcionarios" ? (<tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
              </tr>) : (<span>errouuu</span>)
            }

          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
      <button onClick={get} >Listar</button>
    </div>
  )
}

export default Home2