import React from 'react';
import Banner from '../../componets/Banner';
import Categories from './Categories';
import SpecialDishes from './specialDishes';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <SpecialDishes/>
        </div>
    );
};

export default Home;