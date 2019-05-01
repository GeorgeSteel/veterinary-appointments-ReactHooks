import React, { useState, useEffect } from 'react';

function Date({date, index, deleteDate}) {
  return(
    <div className="cita">
      <p>Pet: <span>{ date.pet }</span></p>
      <p>Owner: <span>{ date.owner }</span></p>
      <p>Date: <span>{ date.date }</span></p>
      <p>Hour: <span>{ date.hour }</span></p>
      <p>Symptoms: <span>{ date.symptoms }</span></p>
      <button className="button eliminar u-full-width" type="button" onClick={() => deleteDate(index)}>Delete X</button>
    </div>
  )
}

function Form(props) {
  const initialState = {
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  };

  const [appointment, setAppointment] = useState(initialState);

  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    // send the date to the main componennt
    props.createDate(appointment);

    // reset form
    setAppointment(initialState);
  }

  return (
    <React.Fragment>
      <h2>Add Appointment</h2>
      <form onSubmit={ handleSubmit }>
        <label>Pet's Name</label>
        <input 
          type="text" 
          name="pet"
          className="u-full-width" 
          placeholder="Pet's Name" 
          onChange={ handleChange }
          value={ appointment.pet }
        />

        <label>Owner's Name</label>
        <input 
          type="text" 
          name="owner"
          className="u-full-width"  
          placeholder="Owner's Name" 
          onChange={ handleChange }
          value={ appointment.owner }
        />

        <label>Date</label>
        <input 
          type="date" 
          className="u-full-width"
          name="date"
          onChange={ handleChange }
          value={ appointment.date }
        />               

        <label>Hour</label>
        <input 
          type="time" 
          className="u-full-width"
          name="hour" 
          onChange={ handleChange }
          value={ appointment.hour }
        />

        <label>Symptoms</label>
        <textarea 
          className="u-full-width"
          name="symptoms"
          onChange={ handleChange }
          value={ appointment.symptoms }
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Add</button>
      </form>
    </React.Fragment>
  );
}

function App() {
  let initialDates = JSON.parse(localStorage.getItem('dates'));

  if (!initialDates) {
    initialDates = [];
  }

  const [date, setDate] = useState(initialDates);

  // add new dates into the state
  const createDate = newDate => {
    const newDates = [...date, newDate];
    // save in the state
    setDate(newDates);
  }

  // delete date
  const deleteDate = idx => {
    const newDates = [...date];
    newDates.splice(idx, 1);

    setDate(newDates);
  }

  useEffect(
    () => {
      let initialDates = JSON.parse(localStorage.getItem('dates'));

      if (initialDates) {
        localStorage.setItem('dates', JSON.stringify(date));
      } else {
        localStorage.setItem('dates', JSON.stringify([]));
      }
    }, [date]
  )

  // set the title conditionally
  const title = date.length === 0 ? 'No dates added' : 'Dates Management';

  return (
    <React.Fragment>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createDate={ createDate }
            />
          </div>
          <div className="one-half column">
            <h1>{ title }</h1>
            { date.map((date, idx) => (
              <Date
                key={idx}
                index={idx}
                date={date}
                deleteDate={deleteDate}
              />
            )) }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
