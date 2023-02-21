import React, {useState} from 'react';


export function Footer (props){
    return(
        <div className='footer container'>
            <div className='footer-description'>
                <div className='footer-logo-container'>
                    <div className='footer-logo'>
                        <a href="/home"><img src="img/logo-footer.png" alt="логотип"/></a>
                    </div>
                    <div className='footer-text'>
                        <p>Cайт об отдыхе и путешествиях.</p>
                    </div>
                </div>
                <div className='footer-links-container'>
                    <div className='footer-links'>
                        <p>О НАС</p>
                        <a href="/home" id='active-home'>Главная</a>
                        <a href="/tours">Места назначения</a>
                        <a href="/travel_history">История путешествий</a>
                        <a href="/contacts">Контакты</a>
                    </div>
                    <div className='footer-links'>
                        <p>КОМПАНИЯ</p>
                        <a href="">Предложения</a>
                        <a href="">Политика конфиденциальности</a>
                        <a href="">Условия</a>
                        <a href="">Политика возврата</a>
                    </div>
                    <div className='footer-links'>
                        <p>БРОНИРОВАНИЕ</p>
                        <a href="">Рейсы</a>
                        <a href="">Отели</a>
                        <a href="">Автобусы</a>
                        <a href="">Поезда</a>
                    </div>
                </div>
            </div>
        </div>
    )
}