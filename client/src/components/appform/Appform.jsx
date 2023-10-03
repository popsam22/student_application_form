import './appform.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function Appform() {
  const navigate = useNavigate() 
  const [data, setData] = useState({
    name: '', dob:'', gender:'',nationality:'',
    state:'', religion:'', phone:'', email:'',
    disability:'', class:'', prev_school:'',
    school_address:'', guardian_name:'',guardian_phone:'',
    guardian_address:''
  })


  const changeValues = (name, value)=> {
    setData({...data, [name]:value})
  }

  const submitApplication = () => {
    //submit to backend
    console.log(data, 'dreerdfew fd')
    navigate('/payment')
  }

  

  return (
    <div className="application-form flex flex-col border-solid border-2 shadow-2xl p-10">
      <div className="form-header flex flex-col align-middle text-center">
        <h2 className="text-4xl font-semibold leading-7 text-green-900 mb-2">Application Form</h2>
        <p className='my-12 mt-0 text-sm'>Lorem Ipsun Tapsun Elajare ffwenj ed rwejdq  c ewreqwe veropv dsjiojpk vwjeijnbqdw sewrjivwn assdfjiw </p>
        <p className='te'>Fill In your Details to Continue</p>
      </div>
      <div className="student-info p-8">
        <h2 className='text-left'>Student Information</h2>
        <div className='grid gap-6 lg:grid-cols-3 border-t-2 border-black pt-4'>
          <label>
            Name
            <input type="text" name="name" onChange={(e)=>changeValues(e.target.name, e.target.value)}  className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Name"/>
          </label>
          <label>
            Date Of Birth
            <input type="date" name="dob" onChange={(e)=>changeValues(e.target.name, e.target.value)} className=" w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Name"/>
          </label>
          <label>
            Gender
            <select name="gender" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 bg-transparent py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>
          <label>
            Nationality
            <select name="nationality" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 bg-transparent py-1.5 pl-2 pr-20 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>...</option>
              <option>Nigerian</option>
              <option>Non-Nigerian</option>
            </select>
          </label>
          <label>
            State
            <select name="state" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 bg-transparent py-1.5 pl-2 pr-20 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>Select State</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Kaduna</option>
              <option>Enugu</option>
              <option>Rivers</option>
            </select>              
          </label>
          <label>
            Religion
            <input type="text" name="religion" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Religion"/>
          </label>
          <label>
            Phone Number
            <input type="phone" name="phone" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="+234 0000 0000"/>
          </label>
          <label>
            Email
            <input type="email" name="email" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Email"/>
          </label>
          <label>
            Disability
            <select name="disability" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 bg-transparent py-1.5 pl-2 pr-20 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>None</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Kaduna</option>
              <option>Enugu</option>
              <option>Rivers</option>
            </select>              
          </label>
          <label>
            Class To Be Addmitted
            <select name="class" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 bg-transparent py-1.5 pl-2 pr-20 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
              <option>Select Class</option>
              <option>Jss 1</option>
              <option>Pri 5</option>
              <option>Nursery 3</option>
            </select>              
          </label>
          <label>
            Last School Attendend
            <input type="text" name="prev_school" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
          </label>
          <label>
            School Address
            <input type="address" name="school_address" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
          </label>
        </div>
      </div>
      <div className='guardian-info p-8'>
        <h2>Guardian Information</h2>
        <div className='grid gap-6 md:grid-cols-3 border-t-2 border-black pt-4'>
          <label>
              Name
              <input type="text" name="guardian_name" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Name"/>
          </label>
          <label>
            Phone Number
            <input type="phone" name="guardian_phone" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="+234 0000 0000"/>
          </label>
          <label>
            Address
            <input type="address" name="guardian_address" onChange={(e)=>changeValues(e.target.name, e.target.value)} className="w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
          </label>
        </div>
      </div>
      <div className='flex items-end '>
        <button onClick={submitApplication} className='w-32 h-12 border-2 ml-[80%] bg-blue-400 shadow-slate-400 hover:bg-indigo-800 rounded-2xl'>Submit</button>
      </div>
    </div>
        )
    }
    
  export default Appform 