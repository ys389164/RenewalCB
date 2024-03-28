function loadHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/src/view/header/header.html', true);
    xhr.send();

    xhr.onload = () => {
        document.getElementById('header').innerHTML = xhr.responseText;

        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', '/src/view/header/header.js');
        document.querySelector('body').appendChild(scriptTag);
    }
}
function loadFooter() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/src/view/footer/footer.html', true);
    xhr.send();

    xhr.onload = () => {
        document.getElementById('footer').innerHTML = xhr.response;
        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', '/src/view/footer/footer.js');
        document.querySelector('body').appendChild(scriptTag);
    }
}

window.addEventListener('load',()=>{
    loadHeader();
    loadFooter();
})