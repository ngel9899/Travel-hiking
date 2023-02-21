import React, {useState} from 'react';


export function HouseOnWheels (props) {
    return (
        <div className='HouseOnWheels container'>
            <div className='HouseOnWheels-container HouseOnWheels-left'>
                <div className='HouseOnWheels-img'>
                    <img src="img/house_on_wheels.png" alt=""/>
                </div>
            </div>
            <div className='HouseOnWheels-container'>
                <div className='HouseOnWheels-text'>
                    <h3>Начальная цена от 1000 рублей!</h3>
                    <h3>Воспользуйтесь лучшими предложениями и
                        Хороших каникул!</h3>
                    <p>Travel-hiking.ru - это пропуск в мир путешествий.
                        Мы предлагаем туры самых разных
                        направлений, в разных ценовых категориях.
                        Для каждого клиента мы подберем именно тот тур, который
                        максимально полно будет удовлетворять его желаниям</p>
                </div>
                <div className='HouseOnWheels-button-container'>
                    <button onClick={() => document.location='/tours'} className='HouseOnWheels-button' >Узнать Больше</button>
                </div>
            </div>
        </div>
    )
}