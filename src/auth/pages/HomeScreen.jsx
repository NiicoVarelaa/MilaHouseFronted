import React from 'react';
import { CarouselFood } from '../../components/CarouselFood';
import { Footer } from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { CardsMenu } from '../../components/CardsMenu';


export const HomeScreen = () => {
    return (
        <div>
            <NavBar />
            <CarouselFood />    
            <CardsMenu />
            <Footer />

        </div>
    )
}
