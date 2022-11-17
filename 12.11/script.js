// Даны дивы. По первому нажатию на каждый див он красится красным фоном,
// по второму красится обратно и так далее каждый клик происходит чередование фона.


const div = document.querySelectorAll('#red',);
 for (const i = 0; i < div.length; i){
    div[i].addEventListener('click',redFun)
 }

function redFun() {
    this.style.background ='red';
    this.removeEventListener('click', redFun);
    this.addEventListener('click', blackFun);
}

function blackFun() {
    this.style.background ='black';
    this.removeEventListener('click', blackFun);
    this.addEventListener('click', redFun);
}



