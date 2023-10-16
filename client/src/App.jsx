import { Navbar, Appform, Payment, Footer, AdminNav } from './components'
import { AdminLogin } from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppContext'


const App = () => {
  return (
    <div className="App font-mi">
    <Router>
      {/* <Navbar /> */}
      <AdminNav />
      <AppProvider>
        <Routes>
            <Route index path="/" element={<Appform />} />
            <Route path='/payment' element={<Payment />}/>
            <Route path='/admin-login' element={<AdminLogin />}/>
        </Routes>
      </AppProvider>
      <Footer />
    </Router>
    </div>
  )
}

export default App