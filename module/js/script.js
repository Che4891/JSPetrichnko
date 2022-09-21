// Импортируем данные

import {one} from './main';

console.log(one);


//Можна при импорте переименновать (two в second)
import {two as second} from './main';

console.log(second);

//Импортировать все что експортировалось

import * as data from './main';
console.log(`${data.one} and ${data.two}`);

//Импорт дефолтной функции

import hi from './main';
hi();