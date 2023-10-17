import { useState } from 'react';
import { zenkleus } from '../assets'
import { RiMenuLine } from 'react-icons/ri';


function AdminNav() {
    const [toggle, SetToggle] = useState(false)
    const view = () => {
        SetToggle(!toggle)
    }
    const Menu = () => {
        return (
            <div className='flex flex-col sm:ml-24 sm:space-x-8 sm:space-x-reverse sm:flex-row-reverse items-center justify-center'>
                <a href="/admin-login">Login</a>
                <a href="/register-school">Register School</a>
            </div>
        )
    }
  return (
    <header className='fixed top-0 w-[100%]'>
        <nav className="bg-zinc-200 box-border border-b-2 flex flex-wrap  pl-6 p-2 pr-8 sm:pl-12">
           <div className='flex items-center justify-center xl:mr-40'>
                <a href="/admin-login">
                    <img className=' w-48' src={zenkleus} alt="Logo" />
                </a>
                <button onClick={view} className='shadow sm:hidden w-14 rounded-md border-2 p-2 ml-32 clicked:border-spacing-4 clicked:border-slate-900'>
                    <RiMenuLine size={36}/>
                </button>
           </div>
           <div className='hidden sm:flex'>
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





