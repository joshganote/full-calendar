import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './App.css'

class EventCalendar extends Component {

    render() {
        return(

            <FullCalendar
                defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
            />
        )   
    }
}

export default EventCalendar;