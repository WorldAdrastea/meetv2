import React, { Component } from "react";

class NumberOfEvents extends Component {
    state = {
        query: 32,
    }
    
    handleInputChanged = (event) => {
        let inputValue = event.target.value;
        if (inputValue >= 1 || inputValue <= 32) {
            this.setState({ 
                query: inputValue,
            });

        this.props.updateEvents(undefined, inputValue)
    } if (inputValue < 1 || inputValue > 32) {
        this.setState({
          query: inputValue,
        });
      }
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