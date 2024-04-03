import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Nav';
import styled from 'styled-components';
import ImageSlider from './components/Hero';
import HonorsLogo1 from './images/hero.jpg';
import HonorsLogo2 from './images/hero.jpg';
import HonorsLogo3 from './images/hero.jpg';

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
        <ImageSlider images={images} />
      </Body>
    </Router>
  );
}

export default App;
