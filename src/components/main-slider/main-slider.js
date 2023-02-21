import React, {useState} from 'react';

export function MainSlider(props){
    return(
        <div className='main-slider container'>
            <div className='main-slider-container'>
                <div className='main-slider-text'>
                    <h1>Билеты в популярные направления</h1>
                </div>
                <div className='main-slider-gallery'>
                    <div className='main-slider-item'><img src="img/img.png" alt=""/><a href="/gorno-altaisk" className='main-slider-item-text'>Горно-Алтайск</a></div>
                    <div className='main-slider-item'><img src="img/img2.png" alt=""/><a href="/petrozavodsk" className='main-slider-item-text'>Петрозаводск</a></div>
                    <div className='main-slider-item'><img src="img/img3.png" alt=""/><a href="/petropavlovsk-kamchatsky" className='main-slider-item-text'>Петропавловск-Камчатский</a></div>
                    <div className='main-slider-item'><img src="img/altai-4.png" alt=""/><a href="/gorno-altaisk" className='main-slider-item-text'>Горно-Алтайск</a></div>
                    <div className='main-slider-item'><img src="img/altai-5.png" alt=""/><a href="/gorno-altaisk" className='main-slider-item-text'>Горно-Алтайск</a></div>
                    <div className='main-slider-item'><img src="img/kareliu-1.png" alt=""/><a href="/petrozavodsk" className='main-slider-item-text'>Петрозаводск</a></div>
                    <div className='main-slider-item'><img src="img/kareliu-2.png" alt=""/><a href="/petrozavodsk" className='main-slider-item-text'>Петрозаводск</a></div>
                    <div className='main-slider-item'><img src="img/kamchatka-2.png" alt=""/><a href="/petropavlovsk-kamchatsky" className='main-slider-item-text'>Петропавловск-Камчатский</a></div>
                    <div className='main-slider-item'><img src="img/kamchatka-5.png" alt=""/><a href="/petropavlovsk-kamchatsky" className='main-slider-item-text'>Петропавловск-Камчатский</a></div>
                </div>
            </div>
        </div>
    )
}