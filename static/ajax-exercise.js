"use strict";


// PART 1: SHOW A FORTUNE
function replaceFortune(response) {
        $('#fortune-text').html(response);
        // alert(response);
}

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', replaceFortune) 
}

$('#get-fortune-button').on('click', showFortune);


function replaceForecast(res) {
    $('#weather-info').html(res['forecast']);
}


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
  
    $.get('/weather.json', formData, replaceForecast)
    // TODO: request weather with that URL and show the forecast in #weather-info
};

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    const formData = {
        melon: $('#melon-type-field').val(),
        qty: $('#qty-field').val()
    };

    $.post('/order-melons.json', formData, (res) => {
        ;
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


