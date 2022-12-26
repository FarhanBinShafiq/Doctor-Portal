
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointments from './Pages/Appointmnets/Appointments';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="appointments" element={<Appointments/>} />
        <Route path="reviews" element={<Reviews/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
