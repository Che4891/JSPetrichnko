"use strict";

const btnPhone = document.querySelector("#iphone"),
  btnMacbook = document.querySelector("#macbook"),
  images = document.querySelectorAll("img");

let phoneAnimation;
btnPhone.addEventListener("click", () => {
    //при клике проверяем есть ли анимация "phoneAnimation" если нет, создаем ее и сразу она запускаеться, если есть идем дальше
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate(
      [
        // первый аргумент - keyframe; второй аргумент - options ( delay, duraction ..... )
        { transform: "translateY(0) rotate(0deg)", filter: 'opacity(100%)' },
        { transform: "translateY(100px) rotate(180deg)", filter: 'opacity(50%)' },
        { transform: "translateY(-100px) rotate(270deg)", filter: 'opacity(75%)' },
        { transform: "translateY(0) rotate(360deg)", filter: 'opacity(100%)' },
      ],
      { duration: 3000, iterations: Infinity }
    );
        // если "phoneAnimation" есть и стоит на паузе, то запускаем
  } else if (phoneAnimation.playState === 'paused') {
      phoneAnimation.play();
      // если "phoneAnimation" есть и не стоит на паузе, то останавливаем
  } else {
      phoneAnimation.pause();
  }
});

//https://developer.mozilla.org/ru/docs/Web/API/Animation
