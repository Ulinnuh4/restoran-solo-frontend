import { ThemeProvider, createTheme } from '@mui/material/styles';

import * as React from "react";
import './App.css';
import MenuContainer from './components/MenuContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FAQContainer from './components/FAQContainer';
import AboutUs from './components/AboutUs'

import FoodSvg from './components/assets/FoodSvg.jsx';

const theme = createTheme({
  typography: {
    fontFamily: 'Circular Std Medium, Poppins, sans-serif',
  },
});

export default function App() {
  React.useEffect(() => {
    document.title = 'Kelompok Tikus';
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {/* Navbar */}
      <Navbar />
      <div className='hero_container' id='home'>
        <Hero />
      </div>

      {/* AboutUs */}
      <h1 className='section_tittle' id='about'>
        <FoodSvg /> <br/>
        <span>About Us</span>
      </h1>
      <div className='faq_container'>
        <AboutUs />
      </div>
      <br/>

      {/* Menu */}
      <h1 className='section_tittle' id='menu'>
        <FoodSvg /> <br/>
        <span>Our Menu</span>
      </h1>
      <div className='menu_container'>
        <MenuContainer />
      </div>

      {/* FAQ */}
      <h1 className='section_tittle' id='faq'>
        <FoodSvg /> <br/>
        <span>Frequently Asked Questions</span>
      </h1>
      <div className='faq_container'>
        <FAQContainer />
      </div>
      <br/>

      {/* Contact Us */}
      <div className='contact_container' id='contact'>
      <Footer />
      </div>
    </ThemeProvider>
  );
}
