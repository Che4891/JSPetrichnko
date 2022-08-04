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




const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }
];

function showGoodFilms(arr) {
  return films.filter(item => 
    item.rating >= 8
  )
}

function showListOfFilms(arr) {
  return films.map(item => 
    item.name
  ).join(', ')
  // второй вариант return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

function setFilmsIds(arr) {
  return films.map((item, index) => {
    item.id = index+1
    return item
  })
}

const tranformedArray = setFilmsIds(films);
console.log(tranformedArray);

function checkFilms(arr) {
  return arr.every(film => film.id || film.id === 0 ? true : false)
}

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
 return funds.filter(item => item.amount >= 0).map(item => item.amount).reduce((sum, current) => sum + current)
 // вариант return funds.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)
};
const test = getPositiveIncomeAmount()
console.log(test);

const getTotalIncomeAmount = (data) => {
  const element = funds.some(item => item.amount <= 0)
  return element ? funds.map(item => item.amount).reduce((sum, current) => sum + current) : getPositiveIncomeAmount()

  // вариант return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};
const rrtt = getTotalIncomeAmount()
console.log(rrtt);