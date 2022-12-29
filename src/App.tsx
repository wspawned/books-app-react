import NavigationBar from './components/NavigationBar';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact/Contact';
import SideDrawer from './components/SideDrawer';
import LogInPage from './components/LogInPage';

const App:React.FC = () => {
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
              <Route path='/login' element= {<LogInPage/>}/>
            </Routes>
          </div>    
        </BrowserRouter>
        </>
  );
}

export default App;
