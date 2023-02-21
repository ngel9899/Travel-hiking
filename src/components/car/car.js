import React, {useState} from 'react';
import {CarEmail} from "../../function";

export function Car (props){
    CarEmail();
    return(
        <div className="car container">
            <div className="car-top">
                <img src="img/car.png" alt=""/>
            </div>
            <div className="car-bot">
                <div className="car-bot-text">
                    <div className="car-text-title">
                        <h1>
                            Подпишитесь на нашу рассылку
                        </h1>
                    </div>
                    <div className="car-text">
                        <p>
                            Так вы сможете первым узнавать о наших новостях и самых выгодных путешествиях
                        </p>
                    </div>
                </div>
                <div className="car-container-form">
                    <form action="POST" className="car-form" id='car-form'>
                        <input type="email" name='email' placeholder="Введите ваш email"/>
                        <input type="submit" text="Подписаться"  id='submitEmail'/>
                    </form>
                </div>
            </div>
        </div>
    )
}