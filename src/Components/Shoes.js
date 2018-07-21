import React, { Component } from 'react';
import Shoe from './Shoe';
import { Row } from 'antd';

class Shoes extends Component {

    constructor(){
        super();
        this.state={
        };
    }

    render() {
        const Shoetable = this.props.shoes.map((shoe, index) => <Shoe shoe={shoe} key={index} />)
        return (
              <Row gutter={16}>
                {Shoetable}
              </Row>
        );
    }
}

export default Shoes;
