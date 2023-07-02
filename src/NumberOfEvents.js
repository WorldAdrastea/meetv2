import React, { Component } from "react";
import { ErrorAlert } from "./Alerts";

class NumberOfEvents extends Component {
    state = {
        query: 32,
        errorAlert: '',
    }
    
    handleInputChanged = (event) => {
        let inputValue = event.target.value;
        if (inputValue >= 1 || inputValue <= 32) {
            this.setState({ 
                query: inputValue,
                errorAlert: '',
            });

        this.props.updateEvents(undefined, inputValue)
    } else {
        this.setState({
            query: inputValue,
            errorAlert: 'Please enter a positive number of events.',
        });
      }
    };

    render() {
        return (
            <div className="numberofevents">
                {this.state.errorAlert !== '' && <ErrorAlert text={this.state.errorAlert}/>}
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