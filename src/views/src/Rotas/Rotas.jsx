import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Template from '../components/Template/Template';
import Home from '../Telas/Home'
import Deletar from '../Telas/Deletar'
import Home2 from '../Telas/Home2';




class Rotas extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path='/listar' element={<Home/>} />
                        <Route path='/listarnew' element={<Home2/>} />
                        <Route path='/deletar' element={<Deletar/>}/>
                        <Route path='/' element={<Home/>} />
                    </Routes>
                </Template>
            </BrowserRouter>
        )
    }
}

export default Rotas