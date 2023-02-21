import React, {useState} from 'react';


export function AboutUs(props){
    return(
        <div className='about_us container'>
            <div className='about_us-container'>
                <div className='about_us-text'>
                    <div className='about_us-for_tourists'>
                        <h3>Для туристов</h3>
                        <span></span><p>8 800 775 50 00 (с 10:00 до 22:00 )</p>
                    </div>
                    <div className='about_us-operating_departments'>
                        <h3>Операционные отделы</h3>
                        <div>
                            <h4>Для журналистов:</h4>
                            <span></span><p>pr@anextour.com</p>
                        </div>
                        <div>
                            <h4>По вопросам работы сайта:</h4>
                            <span></span><p>getsupport@anextour.com</p>
                        </div>
                        <div>
                            <h4>По вопросам трудоустройства:</h4>
                            <span></span><p>personal@anextour.com</p>
                        </div>
                        <div>
                            <h4>Франчайзинг:</h4>
                            <span></span><p>fta@anextour.com</p>
                        </div>
                    </div>
                    <div className='about_us-contact'>
                        <h3>Контакты центрального офиса:</h3>
                        <span className='about_us-contact-location'></span><p>Москва, ул. Двинцев, 12,к1Б</p>
                        <span className='about_us-contact-clock'></span><p>Пн-Пт 10:00 - 19:00</p>
                        <p>Сб, Вс Закрыто</p>
                    </div>
                </div>
                <div className='about_us-map' id='ya-map'>
                </div>
            </div>
        </div>
    )
}