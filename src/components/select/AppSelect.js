import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import SelectMessage from './SelectMessage';
const StateModel = require("./StateModel");
import { Container } from 'reactstrap';

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
    const options = value === null || value === "" ? StateModel.US: [selectedOption];

    return (
      <Container>
        <h1>React Select</h1>
        <Select
          className="Select"
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={StateModel.US}
        />
        {
          options.map(data => {
              return (
                <SelectMessage message={data.label}></SelectMessage>
              )
            }
          )
        }
      </Container>
    );
  }
}

const wrapper = document.getElementById("reactapp");
wrapper ? ReactDOM.render(<AppSelect />, wrapper) : false;
