import React from 'react';
import { CarouselFood } from '../../components/CarouselFood';
import { Footer } from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { CardsMenu } from '../../components/CardsMenu';
import { CardsMenuUser } from '../../components/CardsMenuUser';


export const HomeScreen = () => {
    return (
        <div>
            <NavBar />
            <CarouselFood />
            <CardsMenuUser />    
            <CardsMenu />
            <Footer />

        </div>
    )
}
