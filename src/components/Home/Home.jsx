import React from 'react';
import Slider from '../../page/Slider/Slider';
import Card from '../../page/Card/Card';


const Home = () => {
    return (
        <div>
            <div className='w-250 mx-auto my-3'>
                <Slider></Slider>
            </div>

            <div className='max-w-[1200px] mx-auto'>
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;