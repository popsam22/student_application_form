import './appform.css'

function Appform() {
    return (
        <div className="application-form flex flex-col border-solid border-2 shadow-2xl">
          <div className="form-header">
            <h2 className="text-base font-semibold leading-7 text-gray-900">School Info</h2>
          </div>
          <div className="student-info">Student Info</div>
          <div className="parents-info">Parents Info</div>
        </div>
        )
    }
    
    export default Appform 