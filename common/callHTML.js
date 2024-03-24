const callJSON = (url) =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.addEventListener('load', ()=>{
        jsonArr= JSON.parse(xhr.response);
    })
}