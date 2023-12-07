import React from 'react';
import banner from '../banner.jpg';
import about1 from '../about1.jpg';
import '../App.css';

 
const Home = () => {
  return (
    <>
    <center>
   
      <div>
        <img className='banner' src={banner} alt="my banner" />
      </div>

      <div className="bannerbox ">
        <h2 className='bannertext fw-bold'>Welcome to HAPPY WELL
        WISHERS</h2><br />
     <p>
      <span className="fonts">Endless Possibilities</span>
      <br /><br />
      <button className=" btn bg-white text-black rounded-0">Book Now</button></p>
      </div>
      
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
        <img id="aboutimg1" src={about1} alt="about image" />
      </div> 

{/* 
<div className="services container-fluid text-white row p-3">
 <h2>Services</h2>
<div className='serv1 col-sm-3 m-5'>
 <div className='part1'>
  
 </div>
 <br></br>
 <h3>service 1</h3>
 <p className='bottom'></p>
 
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" className="btn bg-white rounderd-0">Book Now
</button></div>

<div className='col-sm-3 m-5'>
<div className='part1'>
</div>
<br></br>
<h3>service 2</h3><p className='bottom'></p>
 1hr<br/><br/>
 $19.90<br/><br/>
 <button type="button" className="btn bg-white">Book Now
 </button></div>


<div className='col-sm-3 m-5'>
<div className='part1'>
</div>
<br></br>
<h3>service 3</h3><p className='bottom'></p>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" className="btn bg-white">Book Now
</button></div>

<div className='col-sm-3 m-5'>
<div className='part1'>
</div>
<br></br>
<h3>service 4</h3><p className='bottom'></p>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" className="btn bg-white">Book Now
</button></div>

<div className='col-sm-3 m-5'>
<div className='part1'>
</div>
<br></br>
<h3>service 5</h3><p className='bottom'></p>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" className="btn bg-white">Book Now
</button></div>

<div className='col-sm-3 m-5'>
<div className='part1'>
</div>
<br></br>
<h3>service 6</h3><p className='bottom'></p>
1hr<br/><br/>
$19.90<br/><br/>
<button type="button" className="btn bg-white">Book Now
</button></div>
</div> */}


    

      </center>
    </>

  );
}

export default Home;
