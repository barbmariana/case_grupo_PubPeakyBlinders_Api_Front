import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Template from '../components/Template/Template';

import Unidade from '../Telas/Unidade/Unidade';
import EditarUnidade from '../Telas/Unidade/EditarUnidade';
import NovaUnidade from '../Telas/Unidade/NovaUnidade';

import Produto from '../Telas/Produto/Produto';
import NovoProduto from '../Telas/Produto/NovoProduto';
import EditarProduto from '../Telas/Produto/EditarProduto';

import Funcionario from '../Telas/Funcionario/Funcionario';
import NovoFuncionario from '../Telas/Funcionario/NovoFuncionario';
import EditarFuncionario from '../Telas/Funcionario/EditarFuncionario';




class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        {/* tabela unidade */}
                        <Route path='/unidades' element={<Unidade />} />
                        <Route path='/unidade/:id' element={<EditarUnidade />} />
                        <Route path='/unidade/create' element={<NovaUnidade />} />
                        {/* produtos */}
                        <Route path='/produtos' element={<Produto />} />
                        <Route path='/produto/create' element={<NovoProduto />} />
                        <Route path='/produto/:id' element={<EditarProduto />} />
                        {/* funcionarios */}
                        <Route path='/funcionarios' element={<Funcionario />} />
                        <Route path='/funcionario/create' element={<NovoFuncionario />} />
                        <Route path='/funcionario/:id' element={<EditarFuncionario />} />

                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas