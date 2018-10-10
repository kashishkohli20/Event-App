import React, { Component } from 'react';
// import Slide from ''

class TimeUntil extends Component {
  
  state = {
    deadline: "Nov, 29, 2018",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  getTimeUntil = () => {
    const time = Date.parse(this.state.deadline) - Date.parse(new Date());
    console.log(time);
    if (time < 0) {
      console.log("Time already passed");
    } else {
      const seconds = Math.floor( (time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor((time / (1000 * 60 * 60 * 24)));

      this.setState(() => ({
        days,
        hours,
        minutes,
        seconds
      }));
    }
  }

  componentDidMount() {
    setInterval(this.getTimeUntil, 1000)
  }

  render() {
    return (
      <div className="countdown-wrapper">
        <div className="countdown-top">
          Events starts in
        </div>
        <div className="countdown-bottom">
          <div className="countdown-item">
            <div className="countdown-time">
              {this.state.days}
            </div>
            <div className="countdown-tag">
              Days
            </div>
          </div>

          <div className="countdown-item">
            <div className="countdown-time">
              {this.state.hours}
            </div>
            <div className="countdown-tag">
              Hours
            </div>
          </div>

          <div className="countdown-item">
            <div className="countdown-time">
              {this.state.minutes}
            </div>
            <div className="countdown-tag">
              Minutes
            </div>
          </div>

          <div className="countdown-item">
            <div className="countdown-time">
              {this.state.seconds}
            </div>
            <div className="countdown-tag">
              Seconds
            </div>
          </div> 

        </div>
      </div>
    );
  }
}

export default TimeUntil;