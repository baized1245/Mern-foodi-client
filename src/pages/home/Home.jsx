import React from 'react';
import Banner from '../../componets/Banner';
import Categories from './Categories';
import SpecialDishes from './specialDishes';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <SpecialDishes/>
            <Testimonials/>
        </div>
    );
};

export default Home;