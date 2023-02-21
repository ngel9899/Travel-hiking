import React from 'react';
import {Dropdown} from "../dropdown/dropdown";

export function Header(props){
    return(
        <div className="header container">
            <div className="header-left">
                <div className="header-logo">
                    <a href="/home"><img src="img/logo.png" alt="логотип"/></a>
                </div>
            </div>
            <div className="header-right">
                <Dropdown />
                <div className="header-right-container">
                    <div className="container-corporate">
                        <div className="container-corporate-img">
                            <a href=""><img src="img/ic_business.png"/></a>
                        </div>
                        <div className="header-container-text">
                            <a href="">
                                <h5>Корпоративный</h5>
                                <p>Менеджер для бизнеса</p>
                            </a>
                        </div>
                    </div>
                    <div className="header-container-agent">
                        <div className="container-agent-img">
                            <a href="/tours"><img src="img/ic_trip.png"/></a>
                        </div>
                        <div className="header-container-text">
                            <a href="/tours">
                                <h5>Агент</h5>
                                <p>По вопросам бронирования</p>
                            </a>
                        </div>
                    </div>
                    <div className="header-container-button">
                        <button className="header-button">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>

)
}
