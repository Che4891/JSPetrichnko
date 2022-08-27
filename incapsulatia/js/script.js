"use strict";
// Getters && Setters

// Get-получать.
// Set-передавать

const persone = {
  name: "Alex",
  age: 25,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num;
  },
};
console.log((persone.userAge = 30));
console.log(persone.userAge);

//   Инкапсуляция

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  say() {
    console.log(`User name ${this.name}, age ${this._age}`);
  }
  get age() {
    return this._age;
  }

  set age() {
    if (typeof age === "number" && age > 0 && age < 100) {
      this._age = age;
    } else {
      console.log("Not correct value");
    }
  }
}

const ivan = new User("Ivan", 30);

console.log(ivan.age);
ivan.userAge = 99
console.log(ivan.age);
ivan.age = 37;
ivan.say();

// переменная userAge доступна только в нутри обекта и изменить ее можно только через get (getAge) и set (setAge)
