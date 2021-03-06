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
import Grid from '@material-ui/core/Grid';


// CSS
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

    openNewEvent = (event) => {
        this.setState({
            setOpen: true,
        })
    }
    closeNewEvent = (event) => {
        this.setState({
            setOpen: false,
            eventName: '',
            eventAddress: '',
            eventTime: '',
            eventDate: '',
            eventNotes: '',
        })
    }

    render() {
        return (
            <div className="container">
                <div className="task-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.openNewEvent}
                    >
                        Add Event
                    </Button>
                    <div className="event-modal">
                        <Modal open={this.state.setOpen} onClose={this.closeNewEvent}>
                            <div className="modal-input">
                                <h2>Create Event</h2>
                                <form className="event-form">
                                    <Grid container spacing={3}>
                                        <Grid item xs={6}>
                                            <div className="text-input">
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Event Name"
                                                    value={this.state.eventName}
                                                    onChange={this.handleInputField('eventName')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Address"
                                                    value={this.state.eventAddress}
                                                    onChange={this.handleInputField('eventAddress')}
                                                />
                                                <TextField variant="outlined"
                                                    type="text"
                                                    label="Time"
                                                    value={this.state.eventTime}
                                                    onChange={this.handleInputField('eventTime')}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DatePicker
                                                value={this.state.eventDate}
                                                onChange={this.handleInputField('eventDate')}
                                            />
                                        </Grid>
                                    </Grid>
                                    <div className="notes-container">
                                        <TextField variant="outlined" className="notes-box"
                                            type="text"
                                            label="Notes"
                                            multiline
                                            rowsMax="4"
                                            value={this.state.eventNotes}
                                            onChange={this.handleInputField('eventNotes')}
                                        />
                                    </div>
                                </form>
                                <button>
                                    OK
                                </button>
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