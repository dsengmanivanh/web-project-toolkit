import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import './Select.scss';
const ClassNameHelper = require("../../helper/ClassNameHelper");
const StateModel = require("./StateModel");

class AppSelect extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        selectedOption: ''
    };
  }

  handleChange(selectedOption){
    this.setState({ selectedOption: selectedOption });
   }

  render() {
  	const { selectedOption } = this.state;
  	const value = selectedOption && selectedOption.value;
    const options = StateModel.US;
    return (
      <div>
          <div className={ClassNameHelper({"container": true})}>
            <h1>React Select</h1>
            <Select
              className="Select"
              name="form-field-name"
              value={value}
              onChange={this.handleChange}
              options={options}
            />
          </div>
      </div>
    );
  }
}

const wrapper = document.getElementById("reactapp");
wrapper ? ReactDOM.render(<AppSelect />, wrapper) : false;
