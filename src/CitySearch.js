// src/CitySearch.js

import React, { Component } from 'react';
import { InfoAlert } from './Alerts';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        infoText: '',
    };

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({ 
                query: value,
                infoText: 'No city found!',
            });
        } else {
            this.setState({
                query: value,
                suggestions,
                infoText: '',
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion
        });
        this.props.updateEvents(suggestion);
    };

    render() {
        return (
            <div className='CitySearch'>
                {this.state.infoText && <InfoAlert text={this.state.infoText}/>}
                <input
                    type='text'
                    className='city'
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <ul className='suggestions'>
                    {this.state.suggestions.map((suggestion) => (
                        <li 
                            key={suggestion}
                            onClick={() => this.handleItemClicked(suggestion)}
                        >
                        {suggestion}</li>
                    ))}
                    <li onClick={() => this.handleItemClicked("all")}>
                        <b>See all cities</b>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch;