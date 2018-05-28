import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import CardMessage from './CardMessage';
import '../select/Select.scss';
const ClassNameHelper = require("../../helper/ClassNameHelper");
const CardModel = require("./CardModel");

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
    const options = CardModel.cards;
    const cards = value.length == 0 ? CardModel.cards : value;

    return (
      <div>
          <div className={ClassNameHelper({"container": true})}>
            <h1 class="mx-auto">Le Classeur</h1>
            <h4 class="mx-auto">Fiches et Projets</h4>
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
            <div class="row">
            {
              cards.map(data => {
                  return (
                    <CardMessage title={data.label} description={data.description} link={data.link}></CardMessage>
                  )
                }
              )
            }
            </div>
          </div>
      </div>
    );
  }
}

const wrapper = document.getElementById("reactapp");
wrapper ? ReactDOM.render(<AppSelectMulti />, wrapper) : false;
