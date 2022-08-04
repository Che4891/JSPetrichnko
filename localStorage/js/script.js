"user strict";

// //Записываем данные в LocalStorage, 2 агрумента передаем (название и значение)
// localStorage.setItem("number", 5);

// // Получаем данные из LocalStorage, запрашиваем по названию
// localStorage.getItem("number");
// //Пример
// console.log(localStorage.getItem("number"));

// //Удаление поля из LocalStorage, по названию
// localStorage.removeItem("number");

// //Очищаем полностью хранилище
// localStorage.clear();

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector(".form-signin"),
  btnColor = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'red'
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

btnColor.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff'
  }
  else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red'
  }
})

//сохранение данных в localStorage в виде обекта (это делаеться через JSON)

const person = {
  name: 'Alex',
  age: 25
};

const serializePersone = JSON.stringify(person);

localStorage.setItem('alex', serializePersone);

console.log(JSON.parse(localStorage.getItem('alex')))

