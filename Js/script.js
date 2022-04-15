document.addEventListener('click', function handleClick(event) {
    console.log('user clicked: ', event.target);

    if (event.target.classList[1] == 'mobile-menu') {
        event.target.parentElement.parentElement.classList.add('open-nav');
    } else {
        event.target.parentElement.parentElement.classList.remove('open-nav');
    }
});