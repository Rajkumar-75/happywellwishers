import React from 'react';
import { Outlet, Link } from "react-router-dom";
import gifs from '../error.gif';
 function NoPage(){
  return(
     <>
      <img className='gif container-fluid' src={gifs} alt="not found"/>
        <center>
       <button>
      <Link to="/">Home</Link></button>
      </center>
      </> 
      
  );
 }
  
  export default NoPage;