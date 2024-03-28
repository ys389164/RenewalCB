document.addEventListener("DOMContentLoaded", function() {
	loading();
});

function loading() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/src/view/loading/loading.html', true);
    xhr.send();

    xhr.onload = () => {
        document.getElementById('footer').innerHTML = xhr.response;
        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('src', '/src/view/loading/loading.js');
        document.querySelector('body').appendChild(scriptTag);
    }
}

window.onbeforeunload = function(){
    querySelector('#loading').show();
}