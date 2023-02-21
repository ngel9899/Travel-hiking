import React, {useState} from 'react';
import {Header} from "../components/header/header";
import {Footer} from "../components/footer/footer";
import {TicketCards} from "../components/ticket-cards/ticket-cards";


export function Tours(props){
    return(
        <div>
            <Header />
            <TicketCards />
            <Footer />
        </div>
    )
}