// експортируем данные


//1) на прямую (задав значение в експорте)
export let one = 1;

//2) через именной експорт (сначала записать данные в переменную а потом ее експортировать)
let two = 2;

export {two};

//3) експорт функций

export function sayHi() {
    console.log('Hello');
}

//4) експорт по дефолту тоесть что то отдельное

export default function hi() {
    console.log(hi);
}


