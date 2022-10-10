const x = 7;
if (x === 7) {
    alert('Верно');
} else {
    alert('Неверно')
}

let a = 1;
let b = 3;
if (a <= 1 && b >= 3){
   alert(a+b)
}else {
   alert(a-b);
}

let time = 40;
if (time <= 10){
    alert('В первую четверть')
}
if (time <= 20){
    alert('Во вторую четверть')
}
if (time >= 40){
    alert('В третью четверть')
}
if (time >= 59){
    alert('В четвертую четверть')
} else {
    alert('Значение не попадает')
}
