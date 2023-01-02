import React from 'react'
import Categories from '../../components/Categories/Categories';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
        <Slider/>
        <FeaturedProducts type="featured products"/>
        <Categories/>
        <FeaturedProducts type="trending products"/>
    </div>
  )
}

export default Home