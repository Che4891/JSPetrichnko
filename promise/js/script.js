"use strict";

console.log("requst...");

// Promise -переводиться как обещание, принимает два оргумента resolve - візіваеться как функция если все пошло по плану, и reject - если что то пошло не так
const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("data preparation");

    const product = {
      name: "TV",
      price: 2000,
    };
    resolve(product);
  }, 2000);
});

// метод then отрабатывает когда все пошло по плану тоесть вызвалась resolve(); и выше я в эту функцию передаю данные которые обрабатываю в then
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = "order";
      console.log(product);
    }, 2000);
    resolve(product);
    reject(); // вызываеться для того чтоб делать действия когда что-то пошло не так и после завроса вернеться ошибка, ниде в catch описываеться действия если сработал reject
  })
    .then((product) => {
      product.modify = true;
      return product;
    })
    .then((product) => {
      console.log(product);
    })
    .catch(() => {
      console.error("error");
    })
    .finally(() => {
      console.log("Finally"); // finally - метод который отрабатывает в любом случае или сработал resolve или reject
    });
});

// Promise.all - віполняеться только после того как дождался выполнения всех промисов, например я отправил 3 разных запроса, только тогда когда он дождеться 3 ответов начнет выполнять действия

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};
Promise.all([test(1000), test(2000)]).then(() => {
  console.log("All");
});

// Promise.race - выполняеться тогда когда отработал первый промис, тоесть не дожидаеться всех

Promise.race([test(1000), test(2000)]).then(() => {
  console.log("All");
});

// работает если запускать через локальный сервер (MAMP например)
//GET запрос
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//POST запрос
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({ name: "Alex" }),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
