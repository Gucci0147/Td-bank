import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Premier from './Pages/Premier';
import Login from './Pages/Login';
import Createacct from './Pages/Createacct';
import Business from './Pages/Business'
import Contacts from './Pages/Contacts'
import Personalbanking from './Pages/Personalbanking'

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premier" element={<Premier />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/createacct" element={<Createacct />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/personalbanking" element={<Personalbanking />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
