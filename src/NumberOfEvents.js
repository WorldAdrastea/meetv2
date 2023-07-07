import React , { Component } from "react";
import { ErrorAlert } from "./Alerts";

class NumberOfEvents extends Component {
    state = {
        query: 32,
        errorText: '',
    };
    
    handleInputChanged = (event) => {
        let inputValue = event.target.value;
        if (inputValue >= 1 && inputValue <= 32) {
            this.setState({ 
                query: inputValue,
                errorText: '',
            });

        this.props.updateEvents(undefined, inputValue)
    } else {
            this.setState({
                query: inputValue,
                errorText: 'Please enter a number between 1 to 32.',
            });
        }
    };

    render() {
        return (
            <div className="numberofevents">
                {this.state.errorText.length > 0 && <ErrorAlert text={this.state.errorText}/>}
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