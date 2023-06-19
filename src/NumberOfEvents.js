import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        query: 32,
    }
    
    handleInputChanged = (event) => {
        let value = event.target.value;
            this.setState({ query: value });
    };

    render() {
        return (
            <div className="numberofevents">
                <label className="numberofeventslabel">Number of Events: </label>
                <input 
                    type="number"
                    className="numberofeventsinput"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
            </div>
        )
    }
}
  export default NumberOfEvents;