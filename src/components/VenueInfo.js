import React from 'react';

import icon_calendar from './../resources/images/icons/calendar.png';
import icon_location from './../resources/images/icons/location.png';

const VenueInfo = () => {
  return (
    <div className="bck-black">
      <div className="center-wrapper">
        <div className="vn-wrapper">
          <div className="vn-item">
            <div className="vn-outer">
              <div className="vn-inner">
                <div className="vn-icon-square bck-red"></div>
                <div
                  className="vn-icon"
                  style={{
                    background: `url(${icon_calendar})`
                  }}
                >
                </div>
                <div className="vn-title">
                  Event Date & Time
                  </div>
                <div className="vn-desc">
                  12 December 2018 @ 10:00 PM
                  </div>

              </div>
            </div>
          </div>


          <div className="vn-item">
            <div className="vn-outer">
              <div className="vn-inner">
                <div className="vn-icon-square bck-yellow"></div>
                <div
                  className="vn-icon"
                  style={{
                    background: `url(${icon_location})`
                  }}
                >
                </div>
                <div className="vn-title">
                  Event Location
                    </div>
                <div className="vn-desc">
                  Not yet decided
                    </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VenueInfo;