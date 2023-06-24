import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';



class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
  };

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
        <NumberOfEvents updateEvents={this.updateEvents} eventCount={this.state.eventCount}/>
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
