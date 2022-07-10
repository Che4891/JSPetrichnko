

// let old  =  prompt('How old are you??')
// alert(`cool, mi to ${old} yars`) 


let selectedOption = genres.options;



let newOption = new Option("Классика", "classic");
genres.append(newOption);

newOption.selected = true;

let selected = Array.from(genres.options)
.filter(option => option.selected).map(option => option.value)
console.log(selected);

const btn = document.getElementById('btn');
let timerId;
let i = 0;

btn.addEventListener('click', () => {
  timerId = setInterval(logger, 2000)
})

function logger () {
  if ( i === 3) {
    clearInterval(timerId)
  }
  console.log('text');
  i++
}



function myAnimation() {
let pos = 0;
const element = document.querySelector('.wrap__element') 
  const id = setInterval(frame, 10)
  function frame() {
    if (pos === 300) {
      clearInterval(id)
    } else {
      pos++;
      element.style.top = pos + 'px';
      element.style.left = pos + 'px';
    }
  }
}
const buttton = document.getElementById('buttton');
buttton.addEventListener('click', myAnimation)

const now = new Date;
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());


function showThis(a, d) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + d
  }
  console.log(sum());
}
showThis(1, 2)

const obr = { 
  a: 20,
  b: 30,
  sum : function () {
    console.log(this);
  }
}
obr.sum()

function sayName(user) {
  console.log(this);
  console.log(this.name);
}
const user = {
  name: 'John'
}

sayName.call(user);
sayName.apply(user);

function count(num) {
  return this*num;
}

const double = count.bind(2)
console.log(double(3));
// 1) обычная функция this - равен window, но если use strict - undefaind
// 2) коньекст к методоа обектов - сам обект
// 3) this - в конструкторах и классах, это новый екземпляр обекта
// 4) ручная привязка this: call. apply. bind


//конструкторы

class Rectang {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width  
    // метод для конструктора
  }
}

const square = new Rectang(10, 10); 
// передаем значение в конструктор через атрибуты и ниже вызываем метод и проверяем

console.log(square.calcArea());

class ColorRectang extends Rectang {
  constructor(height, width, text, bgColor) {
    super(height, width);
    // в этом классе мы наследуем данные из предыдущего класса "Rectang", метод "super() повторяет эти строчки this.height = height;this.width = width;" мы просто добавляем атрибуты 
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
   console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}
const div = new ColorRectang(20, 30, 'Hello World', 'red')

div.showMyProps();
console.log(div.calcArea());