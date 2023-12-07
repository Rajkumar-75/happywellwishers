
import mylogo from '../hww_logo.png';
import facebook from '../facebook.png';
import instagram from '../instagram.png';
import youtube from '../youtube.png';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <header className='header container-fluid text-white '>
     <div className='logo pt-1 col-sm-4'><img className='logos' src={mylogo}  alt="My Logo" /></div>
      <div className='menu pt-5  col-sm-8'>
        <ul className=' h6'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

            <li><Link to="/services">Services</Link></li> 

          <li> <Link to="/contact">contact</Link></li>
        </ul>
      </div>
      </header>
      <Outlet/>

      <footer className='footer container-fluid ' id='contactus'>
        <div className='container p-5 text-dark row max-auto '>
        <div className="footer1 col-12 mb-3 col-md-4">
      <h3 className="mb-2  contactfont" >Contact</h3>
      <p className='con'>HAPPY WELL WISHERS <br />
        Bangalore <br />
        Karnataka, IN 560068</p>
       
        </div>

        <div class="footer2 col-12 mb-3 col-md-4 pt-3" >
        
        <p className="con ">+91 63666 66444 <br />
        Email info@happywellwishers.com  <br />
        Book a Consulation  <br /></p>
        
        <a href="https://www.facebook.com/happywellwishers"><img  src={facebook}alt='facebook' width="25px"/></a>

        <a href="https://www.instagram.com/happywellwishers/"><img className="icon" src={instagram}alt='instagram' width="25px"/></a>

        <a href="https://www.youtube.com/@happywellwishers"><img className="icon" src={youtube}alt='youtube' width="30px"/></a>
        
        
     </div>
    

    <div class="footer3 col-12 mb-3 col-md-4 pt-2">
      <p class="fs-5">Subscribe to my Newsletter</p>
     <input className="w-75 p-1 mb-2" type="email" name="email" placeholder="Enter Your email here*"/> 
     <button  className=" joinbtn m-1 p-1 bg-dark rounded-0 text-white ">Join</button>

    </div>
        </div>
        
      </footer>

    </>
  )
};

export default Layout;