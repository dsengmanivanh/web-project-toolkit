import React, { Component } from 'react';
import './scss/card.scss';
import { Card, CardImg, CardText, CardBody, CardTitle,Col } from 'reactstrap';

class CardMessage extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
      const {title, description, link} = this.props;
      return (
        <Col sm="4" className="item">
            <Card>
                <a href={link} target="_blank"><CardImg top width="100%" src="http://placehold.it/700x400" alt={title} /></a>
                <CardBody>
                    <a href={link} target="_blank"><CardTitle>{title}</CardTitle></a>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
      )
    }
}

module.exports = CardMessage;
