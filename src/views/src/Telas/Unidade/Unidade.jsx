import React, { useState } from 'react'
import axios from 'axios';

const Unidade = () => {
  const [unidades, setUnidades] = useState([]);

  axios.get('http://localhost:4200/unidades').then((res) => {
    setUnidades(res.data);
  })


  return (
    <div className="container">
      <table className="table table-striped table-hover table-bordered border-dark mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>CEP</th>
            <th>RUA</th>
            <th>NUMERO</th>
            <th>BAIRRO</th>
            <th>TELEFONE</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {
            unidades.length > 0 ? (
              unidades.map((unidade) => {
                return (
                  <tr key={unidade.id_unidade}>
                    <td>{unidade.id_unidade}</td>
                    <td>{unidade.cep_unidade}</td>
                    <td>{unidade.rua_unidade}</td>
                    <td>{unidade.numero_unidade}</td>
                    <td>{unidade.bairro_unidade}</td>
                    <td>{unidade.telefone_unidade}</td>
                    <td>
                      <a href={`/unidade/${unidade.id_unidade}`} className="btn btn-primary m-1" >Editar</a>
                      <a type="button" href="/home" className="btn btn-danger m-1">Excluir</a>
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <td>Carregando...</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Unidade