import { Navbar, Appform, Payment, Footer } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="App font-mi">
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Appform />} />
        <Route path='/payment' element={<Payment />}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App