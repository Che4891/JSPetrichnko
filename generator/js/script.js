"user strict";

// Функция которая при каждом выхове выполняет следующее условие


function* generator() {
  yield 'A';
  yield 'B';
  yield 'C';
  yield 'D';
}

const str = generator();

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

// { value: 'A', done: false }
// { value: 'B', done: false }
// { value: 'C', done: false }
// { value: 'D', done: false }
// { value: undefined, done: true } ответ который выдаст консоль 

function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

const counter = count(7);


console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
