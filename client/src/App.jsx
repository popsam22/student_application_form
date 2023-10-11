import { Navbar, Appform, Payment, Footer } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppProvider } from './context/AppContext'


const App = () => {
  return (
    <div className="App font-mi">
    <Router>
      <Navbar />
      <AppProvider>
        <Routes>
            <Route index path="/" element={<Appform />} />
            <Route path='/payment' element={<Payment />}/>
        </Routes>
      </AppProvider>
      <Footer />
    </Router>
    </div>
  )
}

export default App