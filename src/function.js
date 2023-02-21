import React, {useState} from 'react';
import {url} from "./server/apiConfig";
import IMask from "imask";
const $ = window.$;




export function FunctionIndex(props){
    function ActivePage(props){
        $(function () {
            let location = window.location.href;
            let cur_url = '/' + location.split('/').pop();
            if (cur_url == '/'){
                $("#active-home").attr('id', 'active');
                SliderGallery();
            }
            $('.footer-links a').each(function () {
                let link = $(this).attr('href');
                if (cur_url == link){
                    $(this).attr('id', 'active');
                    if (cur_url == '/contacts') {
                        $('#Functionindex').append('<script type="text/javascript" charSet="utf-8" src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9582fbdc68507bd200e4460318a3388ef797bb727a911c3d80e68c9cbde5c05c&amp;id=ya-map&amp;lang=ru_RU&amp;scroll=true"></script>');
                    }
                    if (cur_url == '/home'){
                        SliderGallery();
                    }
                }

            });
        });
    }
    ActivePage();
}


export function DropDownMenu(){
    $(document).ready(function(){
        const dropdown = document.getElementById('dropdown')
        dropdown.addEventListener('click', DropdownButton)
    });
    function DropdownButton(event) {
        document.getElementById("dropdown-menu").classList.toggle("show");

        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
}

function SliderGallery(){
    $(document).ready(function(){
        $('.main-slider-gallery').slick({
            arrows:true,
            dots:false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1590,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true
                    }
                },
                {
                    breakpoint: 510,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false
                    }
                }
            ]
        });
    });
}
export async function SliderCard(){
    $(document).ready(function(){
        $('.ticket-cards-slider').slick({
            arrows:true,
            dots:false,
            speed: 500,
        });
    });
}

export function SliderPageHat(){
    $(document).ready(function(){
        $('.tour-hat-slider').slick({
            variableWidth: true,
            arrows:true,
            dots:false,
            speed: 500,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
}


export function CarEmail() {
    $(document).ready(function(){
        const applicantFormCar = document.getElementById('car-form')
        applicantFormCar.addEventListener('submit', HandleFormSubmitCar)
    });
    async function HandleFormSubmitCar(event) {
        event.preventDefault()
        const data = SerializeFormCar(event.target)
        await SendData(data, 'email')

    }

    function SerializeFormCar(formNode) {
        const data = new FormData(formNode)
        console.log(formNode);
        return data
    }
}


export async function Connect(request){
    try {
        const response = await fetch(url + '?request='+ request);
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.log('Ошибка сервера');
        console.error(error);
    }
}

export function ValidPhone(event){
    $(document).ready(function(){
        const inputElement = document.querySelector('#phone')
        const maskOptions = {
            mask: '+{7}(000)000-00-00'
        }
        IMask(inputElement, maskOptions)

        const applicantForm = document.getElementById('tours-form')
        const myPhone = document.getElementById('phone').value;
        let rePhone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        let validPhone = rePhone.test(myPhone);
        if (validPhone){
            let reName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
            let myName = document.getElementById('name').value;
            let validName = reName.test(myName);
            if (validName){
                const formNode = event.target.form
                const isValid = formNode.checkValidity()
                formNode.querySelector('button').disabled = false
            }
            else{
                applicantForm.querySelector('button').disabled = true
            }
        }
        else{
            applicantForm.querySelector('button').disabled = true
        }

    });
}
function SerializeForm(formNode) {
    const data = new FormData(formNode)
    let location = window.location.href;
    let cur_url = location.split('/').pop();
    data.append('tour', cur_url);
    return data
}


async function SendData(data, request) {
    return await fetch(url +'?request='+request  , {
        method: 'POST',
        body: data,
    }).catch(function(error){
        console.log(error);
    });
}

async function HandleFormSubmit(event) {
    event.preventDefault()
    const data = SerializeForm(event.target)
    await SendData(data, 'tours-page')

}

export function ToursPageFormEvent(){
    $(document).ready(function(){
        const applicantForm = document.getElementById('tours-form')
        applicantForm.addEventListener('submit', HandleFormSubmit)
        applicantForm.addEventListener('input', ValidPhone)
        applicantForm.querySelector('button').disabled = true
    });
}