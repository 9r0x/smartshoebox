import React, { Component } from 'react';
import './App.css';

import Shoes from './Components/Shoes';

class App extends Component {

    constructor(){
        super();
        let shoes = []
        for (var i = 0; i < 5; i++) shoes.push({
            name: 'Kevin',
            h: Math.random().toFixed(2),
            t: Math.floor(Math.random()*60),
            p: Math.floor(100*Math.random())
        })
        this.state={
            shoes
        };
    }

    updateP() {
        let {shoes} = this.state
        shoes.map(shoe =>  shoe.p<100?shoe.p++:shoe.p)
        this.setState({ shoes })
    }

    render() {
        setTimeout(this.updateP.bind(this), 1000)
        return (
            <div>
              <h1>Smart Shoebox</h1>
              <Shoes shoes={this.state.shoes} />
            </div>
        );
    }
}

export default App;
