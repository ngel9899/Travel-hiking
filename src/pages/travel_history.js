import React, {useState} from 'react';
import {Header} from "../components/header/header";
import {Footer} from "../components/footer/footer";
import {
    IstoriyaTurizma
} from "../components/istoriya-vozniknoveniya-puteshestviy-i-turizma/istoriya-vozniknoveniya-puteshestviy-i-turizma";

export function TravelHistory(props){
    return(
        <div>
            <Header />
            <IstoriyaTurizma />
            <Footer />
        </div>
    )
}

