var span = document.querySelector('.seconds');
span.innerHTML = '0';

setInterval(function () {
    span.innerText = (new Date()).getSeconds();
}, 1000);