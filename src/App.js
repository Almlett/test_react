import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form.jsx';
import Appointment from './components/Appointment.jsx';

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments){ 
    initialAppointments = []
  }


  const [appointments, setAppointments] = useState(initialAppointments);

  useEffect( () => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments]);


  const createAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  };

  const deleteAppointments = id => {
    const newAppointments = appointments.filter( 
      appointment => appointment.id !== id);
    setAppointments(newAppointments);
  };

  let title = "Manage your appointments";
  if (appointments.length === 0 ){
    title = "No appointments"
  };


  return (
    <Fragment>
        <h1>Dates</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Form 
                createAppointment = {createAppointment}
              />
            </div>
            <div className="one-half column">
              <h2>{title}</h2>
              { 
                appointments.map( appointment => (
                  <Appointment 
                    key = {appointment.id}
                    appointment = {appointment}
                    deleteAppointments = {deleteAppointments}
                  />
                ))
              }
              
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
