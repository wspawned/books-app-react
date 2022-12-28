import NavigationBar from './components/NavigationBar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact/Contact';
import SideDrawer from './components/SideDrawer';

function App() {
  return (
        <>
        <BrowserRouter>
          <NavigationBar/>
          <div className='app' >
            <SideDrawer/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/portfolio' element={<Portfolio/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </div>    
        </BrowserRouter>
        </>
  );
}

export default App;
