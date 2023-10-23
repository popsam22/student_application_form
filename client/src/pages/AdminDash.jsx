import { useState } from "react"
import { zenkleus } from "../assets"
import { students } from "./studentdet"
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6"


function AdminDash() {
  const [toggle, setToggle] = useState(false)
  const [activeDiv, setActiveDiv] = useState([true, false, false])
  const [listStudents, setListStudents] = useState(students) // using state becouse i plan on integrating search

  const changeActiveDiv = (e) => {
    const prevActiveId = activeDiv.findIndex((val)=>val)
    let setDivs = [...activeDiv]
    setDivs[prevActiveId] = false
    setDivs[Number(e.target.id)] = true
    setActiveDiv(setDivs)
  }

  const studentDivs =  listStudents.map(({id, name, email}) => {
      return (
        <div key={id} className="flex flex-col border text-center mb-2">
          <h2 className="text-lime-600">{name}</h2>
          <h2>{email}</h2>
        </div>
      )
  })

  return (
    <div className="relative flex h-full ">
      <div style={{display:toggle?'flex':'none'}} className="p-2 flex flex-col border-r-2 bg-slate-300 h-[100vh] absolute">
        <a href="/">
          <img className="w-28" src={zenkleus} alt="logo"/>
        </a>
        <div className="flex flex-col space-y-5 mt-10">
          <h2 style={{color:activeDiv[0]?'green':'black'}} onClick={changeActiveDiv} id="0">Students List</h2>
          <h2 style={{color:activeDiv[1]?'green':'black'}} onClick={changeActiveDiv} id="1">School Details</h2>
          <h2 style={{color:activeDiv[2]?'green':'black'}} onClick={changeActiveDiv} id="2">Contact Us</h2>
        </div>
      </div>
      <button style={{left:toggle?'80px':'0px'}} onClick={() => {setToggle(!toggle)}} className='absolute left-20 top-6 shadow sm:hidden rounded-md border-2 p-1 clicked:border-spacing-4 clicked:border-slate-900'>
        {
          toggle?
            <FaAnglesLeft size={26} />:
            <FaAnglesRight size={26}/>
        }
      </button>
      <div style={{display:activeDiv[0]?'flex':'none'}} className="flex-col mt-20 w-3/4 ml-[12%]">
        { studentDivs }
      </div>
      <div className="hidden">Right</div>
    </div>
  )
}

export default AdminDash