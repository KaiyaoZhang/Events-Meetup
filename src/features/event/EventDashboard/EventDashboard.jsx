import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions';
import EventActivity from '../EventActivity/EventActivity';
import LoadingComponent from '../../../app/layout/LoadingComponent'


const mapState = (state) => ({
  events: state.events,
  loading: state.async.loading
})

const actions = {
  deleteEvent
}

class EventDashboard extends Component {
    constructor(props) {
        super(props)
    }

    handleDeleteEvent = (eventId) => () => {
      /* const updatedEvents = this.state.events.filter(e => e.id !== eventId);
      this.setState({
        events: updatedEvents
      }) */
      this.props.deleteEvent(eventId);
    }

    render() {
      const {events, loading} = this.props;
      if(loading) return <LoadingComponent inverted={true}/>
        return(
            <Grid>
                <Grid.Column width={10}>
                    <EventList 
                      deleteEvent={this.handleDeleteEvent} 
                      events={events}
                    />
                </Grid.Column>
                <Grid.Column width={6}>
                  <EventActivity/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(mapState, actions)(EventDashboard);