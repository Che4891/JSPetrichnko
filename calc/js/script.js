"use strict";

// старый метод работы с сервером

const inputUah = document.querySelector("#uah"),
  inputUsd = document.querySelector("#usd");
// отправляем запрос на сервер
inputUah.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  // может принимать следующие параметры request.open(method, url, async, login, pass);
  request.open("GET", "js/current.json");
  // request.setRequestHeader - настройка дополнительных параметров
  request.setRequestHeader("Content-type", "applicattion/json; charset=utf-8");

  request.send();

  // запрос вернет 1. Status(например 404, или 200 ,,,); 2. statusText(разшифровка статуса, например  no found; ok ...); 3.Respons(то что нам передал бекен); 4. readyState(готовность выполнения запроса, но возвращает толдько номера например 4 - done)

//слидим за изменениями статуса отправки запроса ( вместо readystatechange можно load njulf ye;yj ,eltn ghjdthznm njkmrj status)
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2)
    }
    else {
        inputUsd.value = 'something wrong '
    }
  })
});
 