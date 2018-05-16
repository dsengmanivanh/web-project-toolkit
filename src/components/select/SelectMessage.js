import React, { Component } from 'react';

class SelectMessage extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
      const {message} = this.props;
      return (
        <div className="card Select">
            <div className="card-body">
                <h5 className="card-title">{message}</h5>
                <p className="card-text">{message}</p>
                <a href="faq.html" className="btn btn-primary">Go</a>
            </div>
        </div>
      )
    }
}

module.exports = SelectMessage;
