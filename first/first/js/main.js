"use strict"; // использование строгого формата ввода кода
// типы данных
//1.number

let number = 4;
number = 4.5;

// пример infinity 
console.log(4 / 0); // при деление на 0 

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
} else if (numbers > 100) {
	console.log('second');
} else {
	console.log('three');
}
// сравнение тернарными операторами

const num = 50;

(num == 50) ? console.log('Okc'): console.log("Not Ok");

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
	if (i === 6) {
		//break; - заканчивает цикл когда выполняеться условие
		continue; // выполняет цыкл до условия и после (перепрыгивает)
	}
	console.log(i);
}
// практическое занятие 2 
// 	const numderOfFilms = +prompt('Как много фильмов вы посмотрели?, "');
// 	console.log(numderOfFilms);

// 	const personalMovieDB = {
// 		count: numderOfFilms,
// 		movies: {},
// }; 



// for (let i = 0; i < 2; i++) {
// 	const a = prompt('Один из последних просмотренніх фильмов?');
// 	const b = prompt('На сколько вы их оцените?');

// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b; 
// 		console.log('Done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }
// if (personalMovieDB.count < 10) {
// 	console.log('мало фильмов');
// } else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
// 	console.log('Нормально');
// } else {
// 	console.log('бездельник. только и смотриш фильмы');
// }

// ФУНКЦИИ

//обычная функция без переменных
function sendFirstMassege(text) {
	console.log(text);
}
sendFirstMassege('Hello');


//функция с локальной переменной, которая работает только в нутри
function sendFirstMassege(text) {
	console.log(text);

	let nums = 10;
	console.log(nums);
}
sendFirstMassege('Hello');


//функция с глобальной переменной, которая вызываеться с наружи и потом переопределяеться в нутри


let numds = 10;

function sendFirstsMassege(text) {

	console.log(text);
	numds = 20;
}
sendFirstsMassege('Hello');

console.log(numds);
// rutern это вывод значения он же заканчивает работу функции
function calc(a, b) {
	return (a + b);
}
console.log(calc(4, 5));
console.log(calc(10, 10));


//стрелочная функция
const calkd = (a, b) => {
	return (a + b);
}
console.log(calkd(1, 5));

// Методы и свойства
//свойство
let myString = "strin";
let arre = [1, 2, 3]

console.log(myString.length); // свойство которое проверяет количество (тут букв в троке)
console.log(arre.length); // тут количество елементов в нутри массива

//Метод

console.log(myString.toUpperCase()); // метод для больших букв

let cdf = myString.toUpperCase();
console.log(cdf.toLowerCase()); // метод для маленьких букв

const frut = "Sory this is my frut";
console.log(frut.indexOf('my')); // показывает под каким номером начинаеться этот кусо текста


const logg = 'Hello world';
console.log(logg.slice(0, 6)); // выводи кусок кода который я вырезаю с помощью номеров елементов, если указать только первый номер то строка будет вырезана до конца

const numderrr = 12.2;
console.log(Math.round(numderrr)); // Math применяеться к числам (перевод математика) .round - округление до ближайшего целого числа 


const tests = "19.9px";
console.log(parseInt(tests)); // переводит строку в целое число (вообщше метод для превращения числа я другую систему исчисления но можно спользовать и  так)

console.log(parseFloat(tests)); // работает как и предідущий но возвращает значение уже с точкой


// Третье практическое задание

// let numderOfFilms;

// function start () {
// 	numderOfFilms = +prompt('Как много фильмов вы посмотрели?, "');
// 	while (numderOfFilms == '' || numderOfFilms == null || isNaN(numderOfFilms)) {
// 		numderOfFilms = +prompt('Как много фильмов вы посмотрели?, "');
// 	}
// }
// start();
// const personalMovieDB = {
// 			count: numderOfFilms,
// 			movies: {},
// 			ganrl: {},
// 			privat: false
// 	 }; 

// function rememberMyfilms() {
// 	for (let i = 0; i < 2; i++) {
// 			const a = prompt('Один из последних просмотренніх фильмов?');
// 			const b = prompt('На сколько вы их оцените?');

// 			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 				personalMovieDB.movies[a] = b; 
// 				console.log('Done');
// 			} else {
// 				console.log('error');
// 				i--;
// 			}
// 		}
// }
// // rememberMyfilms();

// function detectPersonalLevel() {
// 	if (personalMovieDB.count < 10) {
// 			console.log('мало фильмов');
// 		 } else if ( personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
// 			console.log('Нормально');
// 		} else {
// 			console.log('бездельник. только и смотриш фильмы');
// 	 }
// }
// // detectPersonalLevel ();

// function showMybm (hidden){
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMybm(personalMovieDB.privat);

// function writeyourGaners() {
// 	for (let i = 1; i <= 3; i++){
// 		personalMovieDB.ganrl[i -1] = prompt (`Ваш любтимый жанр под номером ${i}`);	
// 	}
// }
// writeyourGaners ();

// Колбек функция- там где все действия выполняються строго по порядку / пример такой функции

function learnJs(lang, callback) {
	console.log(`Я учу;${lang}`);
	callback();
}

function done() {
	console.log('Я прошел этот урок');
}

learnJs('JsvaScript', done);

const options = {
	name: "test",
	widht: '1024',
	height: '1024',
	colors: {
		border: "black",
		bg: 'red',
	}
}

console.log(options.name);

delete options.widht; // удалить елемент из обекта

console.log(options);
//вариант где обект внутри показон как строка
// for (let key in options) {
// 	console.log(`свойства ${key} значение ${options[key]}`);
// }

//вариант где обект внутри перебираеться
for (let key in options) {
	if (typeof (options[key]) === "object") {
		for (let i in options[key]) {
			console.log(`Свойство ${i} значение ${options[key][i]}`);
		}
	} else {
		console.log(`свойства ${key} значение ${options[key]}`);
	}

}

//проверка массива на количество елементов keys
const myObject = {
	name: "anton",
	secondName: 'izotov',
	age: 36,
	long: 198,
}
console.log(Object.keys(myObject).length);

//массив с методом внутри (с помощью функции он умеет что-то делать)
const newObject = {
	name: "anton",
	secondName: 'izotov',
	age: 36,
	long: 198,
	makeTest: function () {
		console.log('Test');
	},
};

//РАБОТА С МАССИВАМИ

const arrow = [1, 2, 3, 4, 5, 6, 7, 8, 10];

console.log(arrow);

arrow.pop(10); //удаление последнего елемента массива
console.log(arrow);

arrow.push(11); //добавляет елемент в конец
console.log(arrow);


//перебор массива с помощью обычного цикла
for (let i = 0; i < arrow.length; i++) {
	const element = arrow[i];
	console.log(element);
}

//переюор массива с помощью специального метода forEach()
arrow.forEach(function (item, i, arrow) {
	console.log(`${i}: ${item} внутри массива ${arrow}`);
});


//метод split для перебора большой строки и вередачу данных  в массив
//  const newArrow = prompt('','');
//  const products = newArrow.split(',');
//  console.log(products);

//метод join для того чтоб переделать массив в большую строку

//  console.log(products.join('; '));



// четвертое практическое задание - переписание третьего 


const personalMovieDB = {
	count: 0,
	movies: {},
	ganrl: {},
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Как много фильмов вы посмотрели?, "');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Как много фильмов вы посмотрели?, "');
		}
	},
	rememberMyfilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренніх фильмов?');
			const b = prompt('На сколько вы их оцените?');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('Done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('мало фильмов');
		} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
			console.log('Нормально');
		} else {
			console.log('бездельник. только и смотриш фильмы');
		}
	},
	showMybm: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat == false;
		} else {
			personalMovieDB.privat == true;
		}
	},
	writeyourGaners: function () {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любтимый жанр под номером ${i}`);
			if (genre === '' || genre === null) {
				console.log('некоректные данные или их нет');
				i--;
			} else {
				personalMovieDB.ganrl[i - 1] = genre;
			}
		}
		persnalMovieDB.ganrl.forEach(function (item, i, ) {
			console.log(`Любимый жанр ${i} - это ${item}.`);
		});
	}
};

// переопределение типов данных

//в строку (класический)
console.log(typeof (String(55)));
//конкатинация в строку
console.log(typeof (5 + " "));

//в число
//1)
console.log(typeof (Number('5')));
//2)
console.log(typeof (+'5'));
//3)
console.log(typeof (parseInt("15px", 10)));

//в boolean
let switcher = null;

if (switcher) {
	console.log("Working....");
}
switcher = 1;
if (switcher) {
	console.log("Working....");
}
//2) 
console.log(typeof (Boolean('4')));

//3) 
console.log(typeof (!!"4444"));


// Работа с DOM

const box = document.getElementById('box')
const btns = document.querySelectorAll('.btn')
const round = document.getElementById('round')
const btnNew = document.querySelectorAll('.new-btn')
const wrapper = document.querySelector('.wrap')
//так можно получить все свойства обекта
console.dir(box);
console.log(btns);
// изминения только одного свойства елементаб одного елемента по Id
box.style.backgroundColor = 'red';


// изминения одного свойства у всех елементов с одним классом
for (let index = 0; index < btns.length; index++) {
	btns[index].style.borderRadius = '50%'
};
// еще одинметод для изминения одного свойства у всех елементов с одним классом
btnNew.forEach(item => {
	item.style.backgroundColor = 'blue';
});

// изменения нескольких свойст у одного елемента

round.style.cssText = 'width: 100px; background-color: green; height: 50px'

//создание елемента (только в скрипте)
const div = document.createElement('div');

//создание тестового модуля (только в скрипте)
const text = document.createTextNode('Hello wold');

// добавденния класса к блоку который1 мы создали
div.classList.add('black');

//добавление елемента на страницу (метод для для добавления в конец)

document.body.append(div);


//добавление елемента на страницу (метод для добавления в обертку, в конец)

wrapper.append(div);

//добавление елемента на страницу (метод для добавления в обертку, в начало)

wrapper.prepend(div);

//аналогично через другие методы

btns[0].before(div);
btns[0].after(div);

//удаление едемента
btns[2].remove()

//замена елемента
btns[3].replaceWith(btnNew[0])

//метод для вставляния тегов или текста

div.innerHTML = "<h6>Hello</h6>"

//метод для вставление кусков HTML в определенніе места (beforebegin-этот аргумент определяет место куда ставим)

div.insertAdjacentHTML('beforebegin', '<h5>Hello</h5>')





