import React, { Fragment, useState } from 'react'
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Form = ({createAppointment}) => {

    const [appointment, updateAppointment] = useState({
        pet:'',
        owner:'',
        date:'',
        time:'',
        symptoms:''
    });

    const [error, setError] = useState(false);
    

    const handleChange = e => {
        updateAppointment({
            ...appointment,
            [e.target.name]:e.target.value
        })
    };

    const { pet, owner, date, time, symptoms} = appointment;


    const SubmitDate = e => {
        e.preventDefault();

        if (pet.trim() === '' ||
            owner.trim() === '' ||
            date.trim() === '' ||
            time.trim() === '' ||
            symptoms.trim() === ''){
            setError(true);
            return;
        };

        setError(false);

        appointment.id = uuid();

        createAppointment(appointment);

        updateAppointment({
            pet:'',
            owner:'',
            date:'',
            time:'',
            symptoms:''
        });


    };

    return ( 
        <Fragment>
            <h2>Create date</h2>

            {
                error &&
                <p className="alerta-error">
                    All fields are required
                </p>
                
            }
            <form
                onSubmit={SubmitDate}
            >
                <label>Pet name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet name"
                    onChange={handleChange}
                    value={pet}
                />

                <label>Pet owner</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Pet owner"
                    onChange={handleChange}
                    value={owner}
                />

                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />

                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label>Symptoms</label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    placeholder="symptoms"
                    onChange={handleChange}
                    value={symptoms}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add date</button>

            </form>
        </Fragment>
     );
}
 
Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
}
export default Form;