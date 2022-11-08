/*
Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую
в конец ul будет добавляться новый li с текстом 'пункт'.*/

const ul = document.getElementById('ul');
ul.addEventListener('click',list);

function list() {
event.target.innerHTML = event.target.innerHTML + '!';
}

const btn = document.getElementById('btn');
btn.addEventListener('click',addLi);
function addLi() {
const li = document.createElement('li');
li.innerHTML = 'пункт';
ul.appendChild(li);
}


