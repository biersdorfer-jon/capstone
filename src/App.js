import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Nav';
import styled from 'styled-components';
import ImageSlider from './components/Hero';
import RosterFinal from './components/RosterPage';
import LibraryFinal from './components/LibraryPage';
import HomeFinal from './components/Home';
import HonorsLogo1 from './images/hero.jpg';
import HonorsLogo2 from './images/hero.jpg';
import HonorsLogo3 from './images/hero.jpg';
import Footer from './components/Footer';

const Body = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  max-width: 100%;
`;

const images = [
  HonorsLogo1,
  HonorsLogo2,
  HonorsLogo3,
  // Add more image imports as needed
];

function App() {
  return (
    <Router>
      <Body>
        <Navbar />
        {/* Define routes for each page */}
        <Routes>
          {/* Route for Home */}
          <Route path='/' element={<HomeFinal/>} />

          {/* Route for RosterFinal */}
          <Route path='/roster' element={<RosterFinal/>} />

          {/* Route for LibraryFinal */}
          <Route path='/library' element={<LibraryFinal/>} />

        </Routes>
        {/* <ImageSlider images={images} /> */}
        <Footer/>
      </Body>
    </Router>
  );
}

export default App;
