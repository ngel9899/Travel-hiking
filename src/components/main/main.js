import React, {useState} from 'react';


export function Main (props){
    return(
        <div className="main container">
            <div className="main-container">
                <div className="main-title">
                    <h1>Исследовать мир</h1>
                    <h1>С нами!</h1>
                </div>
                <div className="main-text">
                    <p>
                        Когда мы собираемся в путешествие или в поездку нам надо выбрать
                        подходящий тур, забронировать гостиницу, купить билеты, выбрать
                        интересную экскурсию. Мы не хотим тратить на это много времени
                        и сил, но желаем найти лучшие варианты по доступным ценам.
                    </p>
                </div>
                <div className="main-container-button">
                    <button onClick={() => document.location='/tours'} className="main-button" >Исследуйте Сейчас</button>
                </div>
            </div>
        </div>
    )
}