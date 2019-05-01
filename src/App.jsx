import React, { useState } from 'react';

function Form() {
  return (

    <React.Fragment>
      <h2>Add Appointment</h2>
      <form>
        <label>Pet's Name</label>
        <input 
          type="text" 
          name="mascota"
          className="u-full-width" 
          placeholder="Pet's Name" 
        />

        <label>Owner's Name</label>
        <input 
          type="text" 
          name="propietario"
          className="u-full-width"  
          placeholder="Owner's Name" 
        />

        <label>Date</label>
        <input 
          type="date" 
          className="u-full-width"
          name="fecha"
        />               

        <label>Hour</label>
        <input 
          type="time" 
          className="u-full-width"
          name="hora" 
        />

        <label>Symptoms</label>
        <textarea 
          className="u-full-width"
          name="sintomas"
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
