import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import CardMessage from './CardMessage';
import './scss/home.scss';
import '../../media/g12.png';
import '../../media/bg-showcase-1.jpg';
import './js/anime.min.js';
import './js/charming.min.js';
import './js/main.js';
import 'react-select/dist/react-select.css';

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
      <div className="card-content">
        <section id="classeur" className="content-section text-white folder-section content--ravi ">
            <div className="container text-center">
              <div className="grid">
              <div className="grid__item">
                <div className="dummy"><svg><use xlinkHref="#icon-folderdummy"></use></svg></div></div>
                <div className="grid__item">
                  <div className="folder folder--ravi">
                    <div className="folder__icon folder__icon--perspective">
                      <div className="folder__feedback"></div>
                      <div className="folder__icon-img folder__icon-img--back">
                        <svg className="folder__icon-svg"><use xlinkHref="#icon-folderback"></use></svg>
                      </div>
                      <div className="folder__icon-deco"></div>
                      <div className="folder__icon-img folder__icon-img--cover">
                        <svg className="folder__icon-svg"><use xlinkHref="#icon-foldercover"></use></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid__item"><div className="dummy"><svg><use xlinkHref="#icon-folderdummy"></use></svg></div></div>
              </div>
              <div className="content-section-heading">
              <h2 className="mb-5">Le Classeur</h2>
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
              </div>
            </div>

        </section>
        <div className={ClassNameHelper({"container": true})}>
          <div className="row">
          {
            cards.map(data => {
                return (
                  <CardMessage title={data.label} description={data.description} link={data.link} key={data.value}></CardMessage>
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
