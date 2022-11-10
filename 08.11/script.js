 const btn = document.querySelector('#btn');
 btn.addEventListener('click',createElement);


const createElement = (options) => {
    const lorem = document.querySelector('#lorem');
    const content = lorem.innerHTML;
    const p = '<p>Получилось?<p/>';  //НИЧЕГО НЕ ПОЛУЧИЛОСЬ.
    lorem.innerHTML = p;

   setTimeout(() => {
       content.classList.remove(options.className);
       content.innerHTML = '';
    }, 1500);
}


