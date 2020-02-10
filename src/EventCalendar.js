import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './App.css'

class EventCalendar extends Component {

    render() {
        return(

            <FullCalendar
                defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
                events={[
                    {title: 'Start Group Project', date: '2020-02-10'},
                    {title: 'Finish Group Project', date: '2020-02-21'}
                ]}
            />
        )   
    }
}

export default EventCalendar;