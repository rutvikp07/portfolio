const text = document.querySelector(".text");

const textLoad = () =>{
    setTimeout(() => {
        text.textContent = "Software Developer";
    },0);
    setTimeout(() => {
        text.textContent = "Software Tester";
    },5000);
    setTimeout(() => {
        text.textContent = "System Analyst";
    },10000);
}
textLoad();
setInterval(textLoad,15000);
