import React, { Component } from 'react';
import axios from 'axios';
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
        axios.get(`http://0.0.0.0:8000/data/`)
            .then(res => {
                const updatingShoe = res.data.slice(-1)[0];
                this.setState({ updatingShoe });
            })
        this.state={
            shoes,
            updatingShoe:{}
        };
    }

    updateP() {
        let {shoes} = this.state
        shoes.map(shoe =>  shoe.p<100?shoe.p++:shoe.p)
        this.setState({ shoes })

        axios.get(`http://0.0.0.0:8000/data/`)
            .then(res => {
                const updatingShoe = res.data.slice(-1)[0];
                this.setState({ updatingShoe });
            })
    }

    render() {
        setTimeout(this.updateP.bind(this), 1000)
        //console.log(this.state.updatingShoe)
        return (
            <div>
              <h1>Shoemate</h1>
              <Shoes shoes={this.state.shoes} updatingShoe={this.state.updatingShoe} />
            </div>
        );
    }
}

export default App;
