/*Даны картинки. Привяжите к каждой картинке событие, чтобы по клику
на картинку алертом выводился ее описание.*/
/*Вариант1*/
const img1 = document.querySelector('img1');
const img2 = document.querySelector('img2');

const showNotification1  = () => {
    alert('Palm');
}
const showNotification = () => {
    alert('water');
}

img1.addEventListener('click', showNotification1);
img2.addEventListener('click', showNotification);


/*const img1 = document.querySelector("img1");

//Вариант 2
/!*img1.onclick = function () {
 alert('Водопад')
};*!/

//Вариант3
/!*function showConsole() {
 alert('Водопад');
}
img1.onclick = showConsole;*!/*/











/*
/!*2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите
куда данная ссылка ссылается.*!/

const links = document.querySelectorAll('a');
console.log(links);

const showData = (elem) => {
    console.log(elem.href);
}

for (let i = 0; i < links. length; i++){
    links[i].onmouseenter = () => {
        showData(links[i]);
    }


/!*3) Напишите функцию, которая объединяет несколько строк и возвращает их.
Используйте глобальный массив arguments.*!/

function getStrings() {
    let str = '';
     for(let i = 0; i < arguments.length; i++){
         str += `$arguments[i]}`;
     }
    return str;
}
const result = getStrings('Hello', 'World', 'Javascript');
console.log(result);*/

//не верный html

