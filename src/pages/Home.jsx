import React, { Fragment } from 'react'
import ChooseUs from '../components/choose-us/ChooseUs';
import Download from '../components/download-section/Download';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeroSlider from '../components/hero-slider/HeroSlider';
import MenuPack from '../components/menu-pack/MenuPack';
import PopularMenu from '../components/popular-menu/PopularMenu';
import Testimonial from '../components/testimonials/Testimonial';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonial />
      <Download />
      <Footer />
    </Fragment>
  )
}
export default Home;