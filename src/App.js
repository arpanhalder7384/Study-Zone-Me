import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Singup from './Pages/Singup';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </Router>


  );
}



export default App;
