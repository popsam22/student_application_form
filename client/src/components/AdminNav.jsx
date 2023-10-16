import { useState } from 'react';
import { zenkleus } from '../assets'
import { RiMenuLine, RiCloseLine, RiMenu3Line } from 'react-icons/ri';


function AdminNav() {
    const [toggle, SetToggle] = useState(false)
    const view = () => {
        SetToggle(!toggle)
    }
    const Menu = () => {
        return (
            <div className='flex flex-col xl:flex-row items-center justify-center'>
                <h3>Click Me</h3>
                <h3>Click Me</h3>
            </div>
        )
    }
  return (
    <header>
        <nav className="bg-blend-lighten box-border border-b-2 flex flex-wrap  p-2 pr-8 ">
           <div className='flex items-center justify-center'>
                <a href="/admin-login">
                    <img className=' w-48' src={zenkleus} alt="Logo" />
                </a>
                <button onClick={view} className=' xl:hidden w-14 rounded-md border-2 p-2 ml-32 clicked:border-spacing-4 clicked:border-slate-900'>
                    <RiMenuLine size={36}/>
                </button>
           </div>
           <div className='hidden xl:flex'>
            <Menu />
           </div>
           <div style={{display:toggle? 'flex':'none',}} className=' transition-all duration-1000 ease-out'>
                <Menu />
           </div>
        </nav>
    </header>
  )
}

export default AdminNav





