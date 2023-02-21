import {Header} from "../components/header/header";
import {Main} from "../components/main/main";
import {HouseOnWheels} from "../components/house_on_wheels/house_on_wheels";
import {World} from "../components/world/world";
import {MainSlider} from "../components/main-slider/main-slider";
import {Car} from "../components/car/car";
import {Footer} from "../components/footer/footer";
import React from 'react';

export function Home (props){
    return(
        <div>
            <Header />
            <Main />
            <HouseOnWheels />
            <World />
            <MainSlider />
            <Car />
            <Footer />
        </div>
    )
}