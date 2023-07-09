import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert, ErrorAlert } from './Alerts';
import CityEventsChart from './CityEventsChart';



class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    infoAlert: '',
    errorAlert: '',
    warningAlert: '',
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });

    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
  }

  componentWillUnmount() {
    this.mounted = false;

    window.removeEventListener('offline', this.handleOffline);
    window.removeEventListener('online', this.handleOnline);
  }
  
  handleOffline = () => {
    this.setState({
      warningAlert: "You are currently offline."
    });
  };

  handleOnline = () => {
    this.setState({
      warningAlert: ''
    });
  };

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

  render() {
    const errorMessage = this.state.errorAlert;
    const warningMessage = this.state.warningAlert;
    return (
      <div className="App">
        <div className="alerts-container">
          {warningMessage.length > 0 && <WarningAlert text={this.state.warningAlert}/>}
          {errorMessage > 0 && <ErrorAlert text={this.state.errorAlert}/>}
        </div>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <CityEventsChart locations={this.state.locations} events={this.state.events}/>
        <EventList events={this.state.events}/>
        <NumberOfEvents updateEvents={this.updateEvents} eventCount={this.state.eventCount} errorAlert={this.state.errorAlert}/>
      </div>
    );
  }
}

export default App;
