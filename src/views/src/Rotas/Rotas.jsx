import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Template from '../components/Template/Template';

import Unidade from '../Telas/Unidade/Unidade';
import EditarUnidade from '../Telas/Unidade/EditarUnidade';
import NovaUnidade from '../Telas/Unidade/NovaUnidade';

import Produto from '../Telas/Produto/Produto';
import NovoProduto from '../Telas/Produto/NovoProduto';
import EditarProduto from '../Telas/Produto/EditarProduto';
import Fornecedor from '..//Telas/Fornecedor/Fornecedor'
import EditarFornecedor from '../Telas/Fornecedor/EditarFornecedor';
import NovoFornecedor from '../Telas/Fornecedor/NovoFornecedor';

import Funcionario from '../Telas/Funcionario/Funcionario';
import NovoFuncionario from '../Telas/Funcionario/NovoFuncionario';
import EditarFuncionario from '../Telas/Funcionario/EditarFuncionario';

import Home from '../Telas/Home'
import Estoque from '../Telas/Estoque/Estoque';
import NovoEstoque from '../Telas/Estoque/NovoEstoque';
import EditarEstoque from '../Telas/Estoque/EditarEstoque';




class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        {/*pagina inicial*/}
                        <Route path='/' element={<Home />} />
                        {/* tabela unidade */}
                        <Route path='/unidades' element={<Unidade />} />
                        <Route path='/unidade/:id' element={<EditarUnidade />} />
                        <Route path='/unidade/create' element={<NovaUnidade />} />
                        {/* produtos */}
                        <Route path='/produtos' element={<Produto />} />
                        <Route path='/produto/create' element={<NovoProduto />} />
                        <Route path='/produto/:id' element={<EditarProduto />} />
                        {/*fornecedor*/}
                        <Route path='/fornecedores' element={<Fornecedor />} />
                        <Route path='/fornecedores/create' element={<NovoFornecedor />} />
                        <Route path='/fornecedores/:id' element={<EditarFornecedor />} />
                        {/* funcionarios */}
                        <Route path='/funcionarios' element={<Funcionario />} />
                        <Route path='/funcionario/create' element={<NovoFuncionario />} />
                        <Route path='/funcionario/:id' element={<EditarFuncionario />} />

                        <Route path='/estoque' element={<Estoque />} />
                        <Route path='/estoque/create' element={<NovoEstoque />} />
                        <Route path='/estoque/:id' element={<EditarEstoque />} />

                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas