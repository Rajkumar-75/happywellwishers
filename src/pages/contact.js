import React, { useState } from 'react';
import $ from 'jquery';


function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    

   
  }

  return (
    
    <div className='container-fluid bg-primary p-4'>
    <form onSubmit={handleSubmit}>
      
      <label>EnterName </label><br />
      <input  type="text"
       className='form-control' 
        name="username" 
        value={inputs.username  ||""} 
        onChange={handleChange}
        placeholder='Enter Name'
        
      /> <br />

<div class="mb-3 mt-3">
      <label>Phone</label><br />
         <input type="tel"
          className='form-control'
          name='number'
          value={inputs.number || ""}
          onChange={handleChange}
          placeholder='Enter mobileNO'
           /> <br />
           </div>
         
           <div class="mb-3 mt-3">
           <label>Email</label> <br />
           <input
            className='form-control'
           type="email"
           name="email"
           value={inputs.email ||""}
           onChange={handleChange}
           placeholder='Enter Email'
           required
           /> <br />
           </div>
       
           <div class="mb-3 mt-3">
      <label>User age: </label><br />
        <input 
         className='form-control'
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
          placeholder='Enter Age'
        /> <br /> <br />
        </div>

        
       
        <input type="submit" className='btn btn-primary btn-md btn-outline-warning' />
    </form>
    <p id='demo'></p>
    
   
    
    </div>
   
  );
}

export default Contact;