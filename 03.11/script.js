const btn_danger = document.querySelector('#notification-danger-btn');
const btn_success = document.querySelector('#notification-success-btn');
const btn_primary = document.querySelector('#notification-primary-btn');
const btn_secondary = document.querySelector('#notification-secondary-btn');



const showNotification = (options) => {
    const notification = document.querySelector('#modal-notification');
    notification.classList.add(options.className);
    notification.innerText = options.text;

    setTimeout(() =>{
        notification.classList.remove(options.className)
        notification.innerText = '';
    },1500)
}



btn_danger.addEventListener('click', () =>{
    showNotification({
        text: 'При отправке данных произошла ошибка',
        className:'alert-danger'
    })
})

btn_success.addEventListener('click', () =>{
    showNotification({
        text: 'Ваши данные успешно сохраненны',
        className:'alert-success'
    })
})

btn_primary.addEventListener('click', () =>{
    showNotification({
        text: 'Добрый вечер',
        className:'alert-primary'
    })
})

btn_secondary.addEventListener('click', () =>{
    showNotification({
        text: 'Доброе утро',
        className:'alert-secondary'
    })
})