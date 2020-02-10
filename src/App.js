import React from 'react';
import './App.css';
import EventCalendar from './EventCalendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="calendar">
       <EventCalendar />
       </div> 
      </header>
    </div>
  );
}

export default App;
