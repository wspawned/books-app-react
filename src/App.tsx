import NavigationBar from './components/NavigationBar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { NAVBAR_ITEMS } from './constants';
import Home from './components/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
        <>
        <NavigationBar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
