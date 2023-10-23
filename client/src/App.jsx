import { Navbar, Appform, Payment, Footer, AdminNav } from './components'
import { AdminLogin, SchoolRegister, AdminDash } from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppContext'

const App = () => {
  const path = window.location.pathname
  
  return (
    <div className="App font-mi h-full">
      <Router>
        {!path.includes('admin')? <Navbar />: <AdminNav/>}
        <AppProvider>
          <Routes>
              <Route index path="/" element={<Appform />} />
              <Route path='/payment' element={<Payment />}/>
              <Route path='/admin-login' element={<AdminLogin />}/>
              <Route path='/admin-register' element={<SchoolRegister />}/>
              <Route path='/admin-dashboard' element={<AdminDash />}/>
          </Routes>
        </AppProvider>
        <Footer />
      </Router>
    </div>
  )
}

export default App