import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import './Select.scss';

class SelectMessage extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
      const {message} = this.props;
      return (
          <Card className="Select">
            <CardBody>
              <CardTitle>{message}</CardTitle>
              <CardText>{message}</CardText>
              <Button color="primary">Button</Button>
            </CardBody>
          </Card>
      )
    }
}

module.exports = SelectMessage;
