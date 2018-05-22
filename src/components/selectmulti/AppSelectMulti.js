import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import SelectMessage from '../select/SelectMessage';
import '../select/Select.scss';
const ClassNameHelper = require("../../helper/ClassNameHelper");
const StateModel = require("../select/StateModel");

class AppSelectMulti extends Component {

  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.toggleRtl = this.toggleRtl.bind(this);
    this.state = {
        removeSelected: true,
        disabled: false,
        value: [],
        rtl: false
    };
  }

  handleSelectChange (value) {
		this.setState({ value: value });
	}

	toggleRtl (e) {
		let rtl = e.target.checked;
		this.setState({ rtl });
	}


  render() {
  	const { disabled, value } = this.state;
    const options = StateModel.US;
    const cards = value.length == 0 ? StateModel.US : value;
    
    return (
      <div>
          <div className={ClassNameHelper({"container": true})}>
            <h1>React Select Multi</h1>
            <Select
              disabled={disabled}
              onChange={this.handleSelectChange}
              multi
              options={options}
              placeholder="Select your favourite(s)"
              removeSelected={this.state.removeSelected}
              rtl={this.state.rtl}
              value={value}
            />
            {
              cards.map(data => {
                  return (
                    <SelectMessage message={data.label}></SelectMessage>
                  )
                }
              )
            }
          </div>
      </div>
    );
  }
}

const wrapper = document.getElementById("reactapp");
wrapper ? ReactDOM.render(<AppSelectMulti />, wrapper) : false;
