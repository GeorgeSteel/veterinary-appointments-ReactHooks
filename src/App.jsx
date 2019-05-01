import React, { useState } from 'react';

function Form() {
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: ''
  });

  console.log(appointment);

  const handleChange = e =>  {
    e.preventDefault();

    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  }

  return (
    <React.Fragment>
      <h2>Add Appointment</h2>
      <form>
        <label>Pet's Name</label>
        <input 
          type="text" 
          name="pet"
          className="u-full-width" 
          placeholder="Pet's Name" 
          onChange={ handleChange }
        />

        <label>Owner's Name</label>
        <input 
          type="text" 
          name="owner"
          className="u-full-width"  
          placeholder="Owner's Name" 
          onChange={ handleChange }
        />

        <label>Date</label>
        <input 
          type="date" 
          className="u-full-width"
          name="date"
          onChange={ handleChange }
        />               

        <label>Hour</label>
        <input 
          type="time" 
          className="u-full-width"
          name="hour" 
          onChange={ handleChange }
        />

        <label>Symptoms</label>
        <textarea 
          className="u-full-width"
          name="symptoms"
          onChange={ handleChange }
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Add</button>
      </form>
    </React.Fragment>
  );
}

function App() {
  const [date, setDate] = useState([]);

  return (
    <React.Fragment>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form/>
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
