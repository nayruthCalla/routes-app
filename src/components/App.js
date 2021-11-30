/* eslint-disable jsx-a11y/anchor-is-valid */
import '../css/App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="pricing" element={<Pricing/>}/>
      </Routes>
    </>
  );
}

export default App;
