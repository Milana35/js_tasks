/*Напишите функцию hello(), которая при вызове будет возвращать строку
«Привет, JavaScript!»*/

function hello() {
    document.write('Привет Java Script!');
}
hello();

/*Нужно создать функцию, которая будет выводить куб числа на страничку.
Число должно передаваться параметром.*/

function calc(a = 3,b = 3) {
    let calcNum = a * b;
    console.log(calcNum);
}
calc();

/*3) Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»*/


let name = 'Василий';
function getName() {
    let massege = 'Привет,' + name;
    alert(massege);
}
getName();
alert('Привет, гость»')


/*4) На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
    example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

let num = [5, 10, 15, 20, 25];
num[0] = num[0] * 2;
num[1] = num[1] * 2;
num[2] = num[2] * 2;
num[3] = num[3] * 2;
num[4] = num[4] * 2;
console.log(num);


// for (let i = 0; i < num.length; i++){
//     if (num > 0){
//         continue;
//     }
//     console.log(num[i]);
// }


