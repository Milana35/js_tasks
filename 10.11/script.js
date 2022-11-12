const btn = document.querySelector('#btn');
const showNotification = () => {
    const notification = '<div class="alert-primary">\n' +
        '    A simple primary alert-check it out!\n' +
        '</div>';

    const container = document.querySelector('#notifications')
    container.innerHTML = notification;
    container.classList.add('notifications');


    // Удаление при клике
    // const close = document.querySelector('#notifications')
    // close.innerHTML = notification;
    // close.classList.remove('notifications');


    const newElem = '<div class="alert-secondary">\n' +
        '  A simple secondary alert—check it out!\n' +
        '</div>';

    const elem = document.querySelector('newElem');
    elem.innerHTML = newElem;
    elem.classList.add('newElem');



}

btn.addEventListener('click', showNotification);
showNotification.append('newElem');