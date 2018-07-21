import React, { Component } from 'react';
import { Card, Col, Switch, Progress } from 'antd';

class Shoe extends Component {

    constructor(){
        super();
        this.state={
        };
    }

    render() {
        const { shoe } = this.props
        const { name, h, t, p} = shoe
        return (
            <Col span={6}>
              <Card title={name} extra={<Switch defaultChecked />} style={{ width: 300 }}>
                <Progress style={{position: "relative", left: '25%'}} type="circle" percent={p} />
                <br />
                <br />
                <p>Humidity is {h}</p>
                <p>Temperature is {t}</p>
              </Card>
              <br />
            </Col>
        );
    }
}

export default Shoe;
