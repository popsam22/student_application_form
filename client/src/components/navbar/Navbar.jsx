import  { useState } from 'react';
import {  RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/skoolbod.png'

const Menu = ()=>(
  
  <div className='navbar-links_container'>
    <div className='navbar-link'>
      <p><a href="#home">Home</a></p>
      <div className='line'></div>
    </div>
    <div className='navbar-link'>
      <p><a href="#home">Administration</a></p>
      <div className='line'></div>
    </div>
    <div className='navbar-link'>
      <p><a href="#home">Admission</a></p>
      <div className='line'></div>
    </div>
    <div className='navbar-link'>
      <p><a href="#home">Fees</a></p>
      <div className='line'></div>
    </div>
    <div className='navbar-link'>
      <p><a href="#home">Student Affairs</a></p>
      <div className='line'></div>
    </div>
    </div>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
        <img src={logo}/>
        </div>
         <Menu />
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            {console.log(toggleMenu)}
            <div className='navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar