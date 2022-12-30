import NavigationBar from './components/NavigationBar';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact/Contact';
import SideDrawer from './components/SideDrawer';
import LogInPage from './components/LogInPage';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <div className="app">
        <SideDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
