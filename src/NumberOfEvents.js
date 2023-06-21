import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        query: 32,
    }
    
    handleInputChanged = (event) => {
        let inputValue = event.target.value;
            this.setState({ 
                query: inputValue,
                event: event
            });

        this.props.updateEvents(undefined, inputValue)
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