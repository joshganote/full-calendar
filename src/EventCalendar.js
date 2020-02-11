// React
import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import DatePicker from 'react-date-picker';
import moment from 'moment';

// Material UI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';


// CSS
import './App.css'
import './Calendar.css'

class EventCalendar extends Component {

    state = {
        setOpen: false,
        eventName: '',
        eventAddress: '',
        eventTime: '',
        eventDate: '',
        eventNotes: '',
    }

    handleInputField = infoKey => (event) => {
        this.setState({
            [infoKey]: event.target.value,
        });
    }

    // eventModal = () => {
    //     this.setState({
    //         [open, setOpen]: false,
    //     })
    // }

    openNewEvent = (event) => {
        this.setState({
            setOpen: true,
        })
    }
    closeNewEvent = (event) => {
        this.setState({
            setOpen: false,
        })
    }

    render() {
        return (
            <div className="container">
                <div className="task-button">
                    <Button variant="contained" color="primary" onClick={this.openNewEvent}>
                        Add Event
                    </Button>
                    <div className="event-modal">
                        <Modal onClose={this.openNewEvent}>
                            <div className="modal-input">
                                <h2>Create Event</h2>
                                <form className="event-form">
                                    <TextField variant="outlined"
                                        type="text"
                                        name="Event Name"
                                        value={this.state.eventName}
                                        onChange={this.handleInputField('eventName')}
                                    />
                                    <TextField variant="outlined"
                                        type="text"
                                        name="Address"
                                        value={this.state.eventAddress}
                                        onChange={this.handleInputField('eventAddress')}
                                    />
                                    <TextField variant="outlined"
                                        type="text"
                                        name="Time"
                                        value={this.state.eventTime}
                                        onChange={this.handleInputField('eventTime')}
                                    />
                                    <DatePicker
                                        value={this.state.eventDate}
                                        onChange={this.handleInputField('eventDate')}
                                    />
                                    <TextField variant="outlined"
                                        type="text"
                                        label="Multiline"
                                        multiline
                                        rowsMax="6"
                                        value={this.state.eventNotes}
                                        oonChange={this.handleInputField('eventNotes')}
                                    />
                                </form>
                            </div>
                        </Modal>
                    </div>
                </div>
                <div>
                    <Container maxWidth="md" className="calendar-container">
                        <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
                    </Container>
                </div>
            </div>
        )
    }
}

export default EventCalendar;