import './navbar.css';
import { logo, email, facebook, insta, phone, x, school_logo }  from '../../assets'


function Navbar() {
  return (
    <div className='fixed top-0 border-b-2 w-[100%] h-24 flex items-center pl-32 bg-[#00c274]'>
      <div className='pl-10 mr-40 w-40 h-24 pt-2 pb-2'>
        <img src={school_logo} alt='skoolbod logo' className='w-[100%] h-[100%]'/>
      </div>
      <div className='flex items-center space-x-2 bg-[#00c274] p-2 rounded-full mr-32'>
        <div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
          <a href='#facebook'>
            <img src={facebook} alt='facebook' className='w-6'/>
          </a>
        </div>
        <div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
          <a href='#insta'>
            <img src={insta} alt='insta' className='w-6'/>
          </a>
        </div><div className=' bg-gray-200 p-2 rounded-lg hover:bg-[#0047ab]'>
        <a href='#facebook'>
          <img src={x} alt='x' className='w-6 hover:w-12'/>
        </a>
      </div>
      </div>
      <div className='text-xl flex '>
        <div className='flex flex-row items-center space-x-2 border-r-2 pr-12 '>
          <a href='#phone'>
            <img src={phone} alt='x' className='w-10 hover:w-16'/>
          </a>
          <h2>+234 904 000 1099</h2>
        </div>
        <div className='flex flex-row items-center space-x-2  pl-12 '>
          <a href='#email'>
            <img src={email} alt='x' className='w-10 hover:w-16'/>
          </a>
          <h2>info@skoolbod.com</h2>
        </div>
      </div>
    </div>

  )
}

export default Navbar
