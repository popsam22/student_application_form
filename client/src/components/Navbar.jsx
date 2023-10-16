import { logo, email, facebook, insta, phone, x, school_logo }  from '../assets'
import { useState } from 'react';
import { RiMenuLine, RiCloseLine, RiMenu3Line } from 'react-icons/ri';

function Navbar() {
  const Menu = ()=>(
    <div className='flex flex-col bg-[#00c274] w-[100%] pl-4 pt-2 justify-between sm:pl-12 sm:p-3 xl:flex-row text-center'>
      <div className='flex items-center space-x-2 p-2 rounded-full xl:mr-32 sm:mr-16 sm:hidden sm:ml-8 '>
        <div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
          <a href='#facebook'>
            <img src={facebook} alt='facebook' className='w-6'/>
          </a>
        </div>
        <div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
          <a href='#insta'>
            <img src={insta} alt='insta' className='w-6'/>
          </a>
        </div>
        <div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
          <a href='#facebook'>
            <img src={x} alt='x' className='w-6 hover:w-12'/>
          </a>
        </div>
      </div>
      <div className='flex flex-row items-center space-x-1 pr-1 sm:pb-4 xl:border-r-2 xl:pb-0 xl:mr-8'>
        <a href='#phone'>
          <img src={phone} alt='x' className='w-8 hover:w-16'/>
        </a>
        <h2>+234 9040 001099</h2>
      </div>
      <div className='flex flex-row items-center space-x-1 sm:ml-1 '>
        <a href='#email'>
          <img src={email} alt='x' className='w-8 hover:w-16'/>
        </a>
        <h2>info@skoolbod.com</h2>
      </div>
     
    </div>
  )
  
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='fixed top-0 border-b-2 w-[100%] h-10 xl:h-24 flex items-center p-2 pl-4 xl:pl-32  bg-[#00c274] min-[645px]:h-20'>
      <div className='flex flex-row mr-10 sm:mr-0 items-center font-bold sm:ml-10 xl:mr-10'>
        <img src={school_logo} alt='skoolbod logo' className='w-16 h-8 mr-1 xl:w-24 xl:h-12 text-xl'/>
        <h3>Bright View Schools</h3>
      </div>
      <div className='hidden items-center space-x-2 p-2 rounded-full xl:mr-32 sm:mr-16 sm:flex sm:ml-8 '>
        <div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
          <a href='#facebook'>
            <img src={facebook} alt='facebook' className='w-6'/>
          </a>
        </div>
        <div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
          <a href='#insta'>
            <img src={insta} alt='insta' className='w-6'/>
          </a>
        </div>
        <div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
          <a href='#facebook'>
            <img src={x} alt='x' className='w-6 hover:w-12'/>
          </a>
        </div>
      </div>
      <div className='hidden xl:flex'>
        <Menu />
      </div>
      <div className='min-[821px]:hidden ml-10'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenuLine color='#fff' size={27} onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='flex absolute top-9 left-0 w-[100%] sm:top-16 sm:pt-4 '>
            {console.log(toggleMenu)}
            <Menu />
          </div>
        )}
      </div>
    </div>

  )
}

export default Navbar
