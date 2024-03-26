function loadHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/IHM/header/header.html', true);
    xhr.send();

    xhr.onload = () => {
        document.getElementById('header').innerHTML = xhr.responseText;

        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', '/IHM/header/header.js');
        console.log(scriptTag);
        document.querySelector('body').appendChild(scriptTag);
    }
}
function loadFooter() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/IHM/footer/footer.html', true);
    xhr.send();

    xhr.onload = () => {
        document.getElementById('footer').innerHTML = xhr.response;
        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', '/IHM/footer/footer.js');
        document.querySelector('body').appendChild(scriptTag);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});
