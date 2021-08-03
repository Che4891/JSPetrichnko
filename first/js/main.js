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

	//ПРАКТИЧЕСКОЕ ЗАДАНИЕ

	// const numderOfFilms = +prompt('Как много фильмов вы посмотрели?, "');
	// console.log(numderOfFilms);

	// const personalMovieDB = {
	// 	count: numderOfFilms,
	// 	movies: {},
	// 	actors: {},
	// 	genres: [],
	// 	privat: false
	// }; 


	// const a = prompt('Один из последних просмотренніх фильмов?');
	// const b = prompt('На сколько вы их оцените?');

	// const d = prompt('Один из последних просмотренніх фильмов?');
	// const c = prompt('На сколько вы их оцените?');
	
	// personalMovieDB.movies[a] = b; 
	// personalMovieDB.movies[d] = c; 

	// console.log(personalMovieDB);

	//Условия IF & ELSE
	const testing = 1;

	if (testing) {
		console.log('Ok');
	} else {
		console.log('not ok');
	}

	// много уровневая проверка

	const numbers = 50;

	if (numbers < 49) {
		console.log('first');
	} else if ( numbers > 100 ) {
		console.log('second');
	} else {
		console.log('three');
	}
	// сравнение тернарными операторами

	const num = 50;

	(num == 50) ? console.log('Okc') : console.log("Not Ok");

	//многоуровневая проверка SWITCH

	const nures = '50';

	switch (nures) {
		case '49':
			console.log('not');
			break;
		case '150':
			console.log('not');
			break;
		case '50':
			console.log('yes');
			break;
		default:
			console.log('не в этот раз');
			break;
	}

	// ЦЫКЛЫ
// while
	let chukl = 50;

	while (chukl <= 55) {
		console.log(chukl);
		chukl++;
	}
//do

	let chukl1 = 50;

	do {
		console.log(chukl1);
		chukl1++;
	}
	while (chukl1 <= 55);
//for 
let nurt = 50;
for (let i = 1; i < 8; i++) {
	console.log(nurt);
	nurt++;
}

for (let i = 1; i < 10; i++) {
	if (i===6) {
		//break; - заканчивает цикл когда выполняеться условие
		continue; // выполняет цыкл до условия и после (перепрыгивает)
	}
	console.log(i);
}
