import React, { Component } from 'react';
import {Connect, SliderCard} from "../../function";

export function TicketCards(props){

    async function Tours() {
        const connectArray = await Connect('tours');
        const container = document.querySelector('.ticket-cards');
        for (let i = 0; i < connectArray.length; i++) {
            container.innerHTML += `
        <div class='ticket-cards-cell'>
            <div class='ticket-cards-slider' id=${i}>

            </div>
            <div class='ticket-cards-main'>
                <div class='ticket-cards-title'>
                    <a href="/${connectArray[i]['link']}">${connectArray[i]['name']}</a>
                    <p>${connectArray[i]['location']}</p>
                </div>
                <div class='ticket-cards-text'>
                    <p>${connectArray[i]['description']}</p>
                </div>
                <div class='ticket-cards-container-button'>
                    <button onclick="document.location='/${connectArray[i]['link']}'" class='ticket-cards-button'>${connectArray[i]['price']} ₽</button>
                </div>
            </div>
        </div>
        `
            }
        await ImgTours();
        await SliderCard();
    }

    async function ImgTours() {
        const connectArrayImg = await Connect('imgTours');
        for (let i = 0; i < connectArrayImg.length; i++){
            let key = document.getElementById(i);
            for (let y = 0 ; y < connectArrayImg[i].length; y++){
                key.innerHTML += `
                    <div class='ticket-cards-item'>
                        <img src="img/${connectArrayImg[i][y]}.png" alt=""/>
                    </div>
            `
            }
        }

    }
    Tours();
    return(
        <div className='ticket-cards container'>
        </div>
    )
}