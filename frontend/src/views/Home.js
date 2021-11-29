import React from 'react';
import CarouselInformation from '../components/CarouselInformation';
import Information from '../components/Information';
import Instructions from '../components/Instructions';
import NavBar from '../components/NavBar';

function Home() {
    return (
        <>
            <CarouselInformation />
            <Information />
            <Instructions />
        </>
    );
}

export default Home;
