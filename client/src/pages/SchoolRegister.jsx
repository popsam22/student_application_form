import { useState } from "react";


function SchoolRegister() {
  const [selectedFile, setSelectedFile] = useState('');
  return (
    <div className="border-2 rounded-md mx-5  my-5 py-5 px-3 bg-slate-50  xl:p-8 mt-36 xl:w-2/6 xl:ml-[33.33%] mb-12">
      <div>
        <h2 className='text-center text-2xl font-black'>School Register</h2>
      </div>
      <form className="flex flex-col mt-8">
        <label className='font-medium'>School Name
          <input
            type="text"
            className="p-1 border-b-2 border-[#4d4c4c] w-[100%] pl-2 mb-4"
            placeholder="School Name"
            name="school_name"
          />
        </label>
        <label className="mt-6">School Address</label>
          <input
            type="address"
            className="border-[#4d4c4c] p-1 border-b-2 w-[100%] pl-2 mb-4"
            placeholder="School Address"
            name="address"
          />
        <label className='font-medium mt-4'>Email
          <input
            type="text"
            className="p-1 border-b-2 border-[#4d4c4c] w-[100%] pl-2 mb-4"
            placeholder="Email"
            name="email"
          />
        </label>
        <label className='font-medium mt-4'>Phone Number
          <input
            type="text"
            className="p-1 border-b-2 border-[#4d4c4c] w-[100%] pl-2 mb-4"
            placeholder="+234 000 0000 000"
            name="phone_number"
          />
        </label>
        <label className='font-medium mt-4'>Application Form Template
          <input
            type="file"
            className="p-1 w-[100%] pl-2 mb-4"
            name="form_template"
            value={selectedFile}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </label>
        <button type='submit' className="bg-[#198754] p-2 rounded-lg mt-6 text-lg text-white ">Register</button>
      </form>

    </div>
  )
}

export default SchoolRegister