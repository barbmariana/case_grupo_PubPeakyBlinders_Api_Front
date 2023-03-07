import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Template from '../components/Template/Template';
import Home from '../Telas/Home'
import Deletar from '../Telas/Deletar'
import Home2 from '../Telas/Home2';
import Unidade from '../Telas/Unidade/Unidade';
import EditarUnidade from '../Telas/Unidade/EditarUnidade';
import NovaUnidade from '../Telas/Unidade/NovaUnidade';
import Produto from '../Telas/Produto/Produto';
import NovoProduto from '../Telas/Produto/NovoProduto';
import EditarProduto from '../Telas/Produto/EditarProduto';




class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path='/listar' element={<Home />} />
                        <Route path='/listarnew' element={<Home2 />} />
                        <Route path='/deletar' element={<Deletar />} />
                        <Route path='/' element={<Home />} />
                        {/* tabela unidade */}
                        <Route path='/unidades' element={<Unidade />} />
                        <Route path='/unidade/:id' element={<EditarUnidade />} />
                        <Route path='/unidade/create' element={<NovaUnidade />} />
                        {/* produtos */}
                        <Route path='/produtos' element={<Produto />} />
                        <Route path='/produto/create' element={<NovoProduto />} />
                        <Route path='/produto/:id' element={<EditarProduto />} />

                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas