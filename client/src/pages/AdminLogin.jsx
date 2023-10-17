import { useContext } from 'react'
import { BiUser } from 'react-icons/bi'
import { CiLock } from 'react-icons/ci'

import AppContext from "../context/AppContext"


export default function AdminLogin() {
  let { loginUser } = useContext(AppContext)

  return (
    <div className="shadow border-2 rounded-md mx-5  my-5 py-5 px-3 bg-slate-50 opacity-75 xl:p-8 mt-36 xl:w-2/6 xl:ml-[33.33%]">
      <div>
        <h2 className='text-center text-2xl font-black'>Log In</h2>
      </div>
      <form onSubmit={loginUser} className="flex flex-col mt-8">
        <label className='font-medium'>Email</label>
        <div className='flex flex-row relative'>
          <BiUser style={{marginLeft: "0.85rem", position: "absolute", bottom:'1rem', left:'-1rem', color:'gray'}} />
          <input
            type="email"
            className="mt-2  p-3 border-b-2 border-black w-[100%] pl-6"
            placeholder=" Type your Email"
            name="email"
          />
        </div>
        <label className="mt-6">Password</label>
        <div className='flex flex-col relative'>
          <CiLock style={{marginLeft: "0.85rem", position: "absolute", bottom:'2rem', left:'-1rem', color:'gray'}} />
          <input
            type="password"
            className="mt-2  p-3 border-b-2 border-black w-[100%] pl-6"
            placeholder=" Type your Password"
            name="password"
          />
        <a className=" text-right text-xs" href="/forgot-password">Forgot Password?</a>

        </div>
        <button type='submit' className="bg-[#198754] p-2 rounded-lg mt-6 text-lg text-white shadow-xl ">Login</button>
        <a className='text-center mt-6' href="/register">Register School</a>
      </form>

    </div>
  )
}