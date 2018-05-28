import React, { Component } from 'react';

class CardMessage extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
      const {title, description, link} = this.props;
      return (
        <div className="col-lg-6 portfolio-item">
          <div className="card h-100">
            <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""></img></a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">{title}</a>
              </h4>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      )
    }
}

module.exports = CardMessage;
