import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
    render() {
        const {attendee} = this.props;
        return (
            <List.Item>
                <Image as='a' circular size = 'mini' src={attendee.photoURL} />
            </List.Item>
        )
    }
}

export default EventListAttendee;