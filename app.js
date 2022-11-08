let clock = null;
let clicks = 0;

function clicked()
{
    let text = document.querySelector("#text");
    text.innerHTML = "I was clicked " + clicks + " times!";
    clicks  ++;
}

document.addEventListener('DOMContentLoaded', function() {
    clock = document.querySelector("#clock");

    // define anonymous function to be executed by interval 
    // interval takes a callback (function reference) as a param
    if (clock == null) return;
    setInterval(() => {
        let date = new Date();
        clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }, 1000);

    // change text's color
    setInterval(() => {
        let random_color = Math.floor(Math.random()*16777215).toString(16);
        let text = document.querySelector("#text");
        if (text)
            text.style.color = "#" + random_color
    }, 100);
});