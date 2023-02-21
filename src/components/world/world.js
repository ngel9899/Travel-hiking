import React, {useState} from 'react';

export function World (props){
    return(
        <div className='world container'>
            <div className='world-text'>
                <h1>Лучшие предложения по бронированию рейсов</h1>
                <p>К вашим услугам горящие путевки и туры
                    в Турцию, Испанию, Египет, Бали, Индонезию, Мексику, Тайланд,
                    Болгарию, Кипр, Мальдивы, Гоа, ОАЭ и другие.</p>
            </div>
            <div className='world-img'>
                <img src="img/bg-world.png" alt=""/>
            </div>
        </div>
    )
}