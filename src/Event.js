// src/Event.js

import React, { Component } from "react";

class Event extends Component {
    state = { showDetails: false};
    handleShowDetails = () => {
        this.setState((prevState) => ({
            showDetails: !prevState.showDetails,
        }));
    };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    return (
        <div className="event">
            <h1 className="summary">{event.summary}</h1>
            <p className="eventstart">
                {new Date(event.start.dateTime).toString()}
            </p>
            <p className="eventlocation">
                {`@${event.summary} | ${event.location}`}
            </p>
            {showDetails && (
                <div className="eventdetails">
                    <h2>About Event: </h2>
                    <a className="eventlink" href="{event.htmllink}" target="_blank">
                        View details on Google Calendar
                    </a>
                    <p className="eventdescriptuion">{event.description}</p>
                </div>
            )}

            <button
                className="detailsbutton"
                onClick={() => this.handleShowDetails()}
            >
                {!showDetails ? 'show' : 'hide'} details 
            </button>
        </div>
    );
  }
}
export default Event;