const text = document.querySelector("#work"); 
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Student";
    }, 0);
    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Designer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Programmer";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, 16000);
}
textLoad();
setInterval(textLoad, 20000);
