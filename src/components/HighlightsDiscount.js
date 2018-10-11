import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class HighlightsDiscount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  }

  handlePercentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState((prevState) => {
        return {
          discountStart: prevState.discountStart + 1
        }
      })
    }
  }

  componentDidUpdate() {
    setTimeout(this.handlePercentage, 30);
  }

  render() {
    return (
      <div className="center-wrapper">
        <div className="discount-wrapper">
          <Fade
            duration={500}
            delay={500}
            onReveal={this.handlePercentage}
          >
            <div className="discount-porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount-description">
              <h3>Purchase tickets before 15 November</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla laborum.</p>
            </div>
          </Slide>

        </div>


      </div>
    );
  }
};

export default HighlightsDiscount;