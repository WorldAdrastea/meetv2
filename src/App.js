import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import {ErrorAlert } from './Alerts';



class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    infoAlert: '',
    errorAlert: '',
  };

  render() {
    console.log(this.state.errorAlert.length);
    const errorMessage = this.state.errorAlert;
    return (
      <div className="App">
        <div className="alerts-container">
          {errorMessage > 0 && <ErrorAlert text={this.state.errorAlert}/>}
        </div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
        <NumberOfEvents updateEvents={this.updateEvents} eventCount={this.state.eventCount} errorAlert={this.state.errorAlert}/>
      </div>
    );
  }

  updateEvents = (location, eventCount) => {
    location = location || 'all';
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
        ? events 
        : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        eventCount: eventCount
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }
}

export default App;
