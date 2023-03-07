import React from "react";
//import { Container } from 'reactstrap';
import Navbar from '../Navbar/Navbar'


class Template extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        )
    }
}

export default Template