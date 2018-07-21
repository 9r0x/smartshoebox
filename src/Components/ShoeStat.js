import React, { Component } from 'react';
import { Card, Col, Switch, Progress } from 'antd';

class Shoe extends Component {

    constructor(){
        super();
        this.state={
        };
    }

    render() {
        const { humidity, temperature } = this.props.updatingShoe
        console.log(this.props.updatingShoe)
        return (
            <Col span={6}>
              <Card title={"Shoe Stats"} extra={<Switch defaultChecked />} style={{ width: 300 }}>
                <Progress percent={humidity} size="small" status="active"/>
                <Progress percent={temperature*2} size="small" status="active" />
                <Progress percent={100} size="small" />
              </Card>
              <br />
            </Col>
        );
    }
}

export default Shoe;
