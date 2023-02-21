import React from 'react';
import {SliderPageHat, ToursPageFormEvent, ValidPhone} from "../../function";

export function ToursPageHat(props){
    let imgArr = props.imgArr;

    const imgPage = imgArr.map(function (item, index){
        let img = `img/${item}.png`;
        return (<div className='tour-page-slider-img' key={index}>
                    <img src={img} alt="" />
                </div>
        )})
    SliderPageHat();
    return(
        <div className='tours-page-hat'>
            <div className='tour-hat-top'>
                <div className='tour-hat-title'>
                    <h2>{props.name}</h2>
                    <p>{props.location}</p>
                </div>
                <div className='tour-hat-data'>
                    <p>Продолжительность: {props.data} дней</p>
                </div>
                <p>{props.text}</p>
            </div>
            <div className='tour-hat-slider'>
                {imgPage}
            </div>
        </div>
    )
}

export function ToursPageBody(props){
    let li = props.li;

    const liList = li.map(function (item, index){
        return <li key={index}>{item}</li>
    })
    return(
        <div className='tours-page-body'>
            <div className='tours-body-title'>
                <h1>{props.h1}</h1>
                <h3>{props.h3}</h3>
            </div>
            <div className='tours-body-text'>
                <p>{props.text}</p>
            </div>
            <div className='tours-body-text-border'>
                <p>{props.border}</p>
            </div>
            <div className='tours-body-ul'>
                <ul>
                    {liList}
                </ul>
            </div>
        </div>
    )
}

export function ToursPageForm(props){
    ValidPhone()
    ToursPageFormEvent()
    return(
        <div className='tour-page-form'>
            <form id='tours-form' name='toursForm' action="/apply/" method="POST">
                <legend>Оставьте вашу заявку</legend>
                <div className="page-form-group">
                    <label htmlFor="">Ваше имя:</label>
                    <input type="text" id="name" name="name" placeholder="Имя" />
                </div>
                <div className="page-form-group">
                    <label htmlFor="">Ваш номер телефона:</label>
                    <input type="tel"  id="phone" name="phone"  placeholder="+7 (999) 99 99 999" />
                </div>
                <button type="submit" className='toursButton'>Отправить</button>
            </form>
        </div>
    )

}