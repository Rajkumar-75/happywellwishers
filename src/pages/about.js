
import React from 'react';
import about from '../about.jpg';
import '../App.css';
function About(){
  return(
    <>
    <div className='content container-fluid pt-4'>
    <div className='content1 col-sm-6 bg-white mt-4  pt-4'>
      <h2 className='p-2'id="about">About</h2>
      <p class="happy  ">HAPPY WELL WISHERS provides an enriched learning
        environment that has helped countless students get
        ahead. Our unparalleled teaching methods help
        participants prepare for the next step in their career
        and broaden their horizons. Since opening our doors
        in 2000, weve worked hard on expanding our
        curriculum to meet the needs of emerging industries.
        Get in touch with us today to ﬁnd out how we can help
        you.</p>
    </div>
  </div>
  <div>
    <img id="aboutimg" src={about} alt="about image" />
  </div>
  </>
  );
}
  
  export default About;