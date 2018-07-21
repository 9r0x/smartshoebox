import React, { Component } from 'react';
import Shoe from './Shoe';
import { Row } from 'antd';
import ShoeStat from './ShoeStat';

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
                <ShoeStat updatingShoe={this.props.updatingShoe}/>
              </Row>
        );
    }
}

export default Shoes;
