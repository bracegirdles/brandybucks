import React from 'react';
import BigCalendar from 'react-big-calendar';
import Moment from 'moment';
import css from 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(Moment);

class Calendar extends React.Component {
  constructor(props) {
    super();

    this.selectSideBarLinks = this.selectSideBarLinks.bind(this);
    this.handleSelectSlot = this.handleSelectSlot.bind(this);
    // this.handleSelectEvent = this.handleSelectEvent.bind(this);

    this.state = {
      events: []
    }
  }

  // ----------------------------------------------
  // Lifecycle Methods
  // ----------------------------------------------
  componentWillUnmount() {
    this.props.handleSideBarLinks([])
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sideBarLinks.length === 0) {
      this.props.handleSideBarLinks(this.selectSideBarLinks(nextProps.status));
    }
  }

  // ----------------------------------------------
  // Helper Methods
  // ----------------------------------------------
  selectSideBarLinks(status) {
    if (status === 'teacher') {
      return [
        {
          name: 'Home',
          endpoint: '/'
        },
        {
          name: 'Students',
          endpoint: '/students'
        },
        {
          name: 'Calendar',
          endpoint: '/calendar'
        },
        {
          name: 'Settings',
          endpoint: '/settings'
        },
        {
          name: 'Message',
          endpoint: '/message'
        }
      ]
    } else {
      return [
        {
          name: 'Home',
          endpoint: '/'
        },
        {
          name: 'Children',
          endpoint: '/children'
        },
        {
          name: 'Schedule',
          endpoint: '/schedule'
        },
        {
          name: 'Settings',
          endpoint: '/settings'
        },
        {
          name: 'Message',
          endpoint: '/message'
        }
      ]
    }
  }

  handleSelectSlot(slotInfo) {
    console.log('event:', slotInfo);

    var newEvent = {
      title: 'my event',
      start: slotInfo.start,
      end: slotInfo.end
    };

    this.setState({
      events: this.state.events.concat([newEvent])
    });

  }

  handleSelectEvent(event) {
    console.log('event', event);
  }


  render() {
    return (
      <div className="container">
        <BigCalendar
            selectable
            events={this.state.events}
            defaultView='week'
            onSelectSlot={this.handleSelectSlot}
            onSelectEvent={this.handleSelectEvent} />
      </div>
    )
  }
}

export default Calendar;
