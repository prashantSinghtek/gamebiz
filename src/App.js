import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './page/Contact';
import Home from './page/feature';
import { ToastContainer } from 'react-toastify';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>


  );
}

export default App;
