import React from 'react';
import {DropDownMenu} from "../../function";


export function Dropdown(){
    DropDownMenu();
    return(
        <div className="dropdown" id='dropdown'>
            <button className="dropbtn">Меню</button>
            <div className='dropdown-menu' id='dropdown-menu'>
                <div className='dropdown-item'>
                    <a href=""><p>Корпоративный менеджер для бизнеса</p><img src="img/ic_business.png"/></a>
                </div>
                <div className='dropdown-item'>
                    <a href="/tours"><p>Агент по вопросам бронирования</p><img src="img/ic_trip.png"/></a>
                </div>
                <div className="dropdown-item">
                    <button className='dropdown-button'>Регистрация</button>
                </div>
            </div>
        </div>
    )
}