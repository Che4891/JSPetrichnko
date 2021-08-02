"use strict"; // использование строгого формата ввода кода
// типы данных
//1.number

let number = 4;
number = 4.5;

// пример infinity 
console.log(4/0); // при деление на 0 

//NaN not a number
console.log('string' * 4); //строку множу на число и получаю инфу что это не чесло

//2.string

let string = 'какой то текст';

//3.object

const obj = {
	name: 'Anton',
	age: 25,
	isMariad: true
};
console.log(obj.isMariad);

//массив он так же являеться обектом 
 const arr = ['blue', 'black', 'red', 'green'];

 console.log(arr[2]);

 // типы данных end

 //вывод инфы
//  alert('hello'); 

//вопрос(да -нет
//const result = confirm('are you here?')  //задает вопрос и ответ да или нет передает в переменную
//console.log(result);

//вопрос -ответ
// const answer = prompt('how old are you?'); // возможность написать ответ (возвращаеться всегда тип-строка) 
// если добавить перед prompt + то тип меняеться
// console.log(typeof(answer));


//вопрос ответ с массивом

// const answers = [];
// answers[0] = prompt('Wath your name?');
// answers[1] = prompt('how old are you?');
// answers[2] = prompt('Were your live?');

// document.write(answers);


//Интерполяция

const category = 'toys';

console.log(`https://www.udemy.com/${category}`);

// Операторы
//Инкримент/ Дикримент
let incr = 10,
	decr = 10;

	// постфиксная форма записи
	incr++;
	decr--;

	//префикстная
	++incr;
	--decr;

	console.log(incr);
	console.log(decr);