/*1) Выводим  2 следующих сообщения после соответствующих задержек.

    Сообщение “Hello after 4 seconds” выводим через 4 секунды.
    Сообщение “Hello after 8 seconds” выводим через 8 секунд.

    В решении нужно определить всего одну функцию, содержащую встроенные функции.
    Это означает, что множество вызовов setTimeout должны будут
использовать одну и ту же функцию.

    Пример вызова:

    setTimeout(func1) => Hello after 4 seconds
setTimeout(func1) => Hello after 8 seconds*/

/******* Вариант 1********/
const timeSecond = () => {
    alert('Hello after 4 seconds');
}
setTimeout(timeSecond,4000)
clearTimeout(timeSecond);

setTimeout(() =>{
    alert('Hello after 8 seconds')
},8000);
console.log(timeSecond)



/****** Вариант 2 *******/
const second = delay => {
    console.log('Hello after ' + delay + ' seconds');
};
setTimeout(second, 4000, 4);
setTimeout(second, 8000, 8);