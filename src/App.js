import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import CurrencyCalculator, { Home } from './component/home';
import { Contactus } from './component/ContactUs';
import { Footer } from './component/footer';
import { CurrencyList } from './component/CurrencyList';
import { About } from './component/Aboutus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/currencylist" element={<CurrencyList />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
