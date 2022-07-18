"use strict";

const names = ["Ivan", "Anna", "Ksenia", "Volodemart"];

// FILTER - вернет массив с отфильтрованными елементами
const shortNames = names.filter(item => 
  item.length < 5
);
console.log(shortNames);

//MAP - вернет массив с елементами что  мы трансформировали
console.log(names);
const resolt = names.map(item => 
  item.toUpperCase()
);
console.log(resolt);


// EVERY / SOME - возвращает булевое значение 
const newArrey = [4, 'test', 'text']

//some - проверяет наш масив или есть хотяб одно совпадение по правилу ( в нашем случае это проверка или есть число вернет true )
const some = newArrey.some(item => typeof(item) === 'number')

//every - проверяет наш масив или все елементы отвечают правилу ( в нашем случае это проверка или все числа вернет true )
const every = newArrey.every(item => typeof(item) === 'number')


//REDUCE  - переберает масив и возвращает значение действий что выполниться в нутри

const arr = [4, 5, 1, 3, 2, 6] 
//reduce - принимает 2 аргумента автоматически первый аргумент это результат действия функции в нашем случаи сумма елементов массива (изначально = 0) а второй это значение каждого елемента (первый елемент в нашем arr[] = 4)
// при первой итеррации (запуске масива) sum = 0 current=4 (она показана для примера, reduce отрабатывает со второй строки)
//при второй  итеррации sum = 0 + 4 = 4 current= 5 
//при третьей итеррации sum = 4 + 5 = 9 current= 1 
//и так дальше до конца
const res = arr.reduce((sum, current) => sum + current)
console.log(res);

const worlds = ['appel', 'pear', 'plum'];

const sentence = worlds.reduce((sum, world) => `${sum}, ${world}`)
console.log(sentence);

//в reduce можно передать значение для первого аргумента 
const test = arr.reduce((sum, current) => sum + current,  3 ) // sum в начале будет не 0 а 3 результат выйдет 24
console.log(test);



// Пример работы с данными (задача вытянуть ключи со значение person)

const obj = {
  ivan: 'person',
  ann: 'person',
  dog: 'animal',
  cat: 'animal'
}
console.log(obj);

const myArr = Object.entries(obj) //метод который трансформирует обект в массив массивов
console.log(myArr);

const newArr = myArr.filter(item => item[1] === 'person');
console.log(newArr);

const finishArr =  newArr.map(item => item[0])
console.log(finishArr);

//это можно записать и в одну строку const myArr = Object.entries(obj).filter(item => item[1] === 'person').map(item => item[0])

