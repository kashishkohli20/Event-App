import React, { Component } from 'react';
import MyButton from './utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'lorem ipsum text',
      'lorem ipsum text',
      'lorem ipsum text',
    ],
    linkto: [
      'https://www.sales.com/balcony',
      'https://www.sales.com/medium',
      'https://www.sales.com/star',
    ],
    delay: [500, 0, 500]
  }

  showBoxes = () => {
    return (
      this.state.prices.map((box, i) => (
        <Zoom
          key={i}
          delay={this.state.delay[i]}
        >
          <div className="pricing-item">
            <div className="pricing-inner-wrapper">
              <div className="pricing-title">
                <span>${box}</span>
                <span>{this.state.positions[i]}</span>
              </div>
              <div className="pricing-description">
                {this.state.desc[i]}
              </div>
              <div className="pricing-buttons">
                <MyButton
                  text="Purchase"
                  link={this.state.linkto[i]}
                  bck="#ffa800"
                  color="#fff"
                />
              </div>

            </div>

          </div>
        </Zoom>

      ))
    );
  }


  render() {
    return (
      <div className="bck-black">
        <div className="center-wrapper pricing-section">

          <h2>Pricing</h2>
          <div className="pricing-wrapper">
            {this.showBoxes()}
          </div>

        </div>

      </div>
    );
  }

};

export default Pricing;