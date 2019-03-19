import React, { Component } from 'react';
import { Grid, Icon, Button, Segment } from 'semantic-ui-react';
import EventDetailedMap from './EventDetailedMap';
import format from 'date-fns/format';

class EventDetailedInfo extends Component {
  state = {
    ShowMap: false
  }

  showMapToggle = () => {
    this.setState({
      ShowMap: !this.state.ShowMap
    })
  }

  render() {
    const { event } = this.props;
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{event.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{format(event.date, 'dddd Do MMMM')} at {format(event.date, 'h:mm:A')}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>{event.venue}</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button onClick={this.showMapToggle} color="teal" size="tiny" content={this.state.ShowMap? 'Hide Map' : 'Show Map'} />
            </Grid.Column>
          </Grid>
        </Segment>
        {this.state.ShowMap && 
        <EventDetailedMap lat={event.venueLatLng.lat} lng={event.venueLatLng.lng}/>
        }
      </Segment.Group>
    )
  }
}

export default EventDetailedInfo;