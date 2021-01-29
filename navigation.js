
const nav1Button = document.querySelector('#nav1');
const nav2Button = document.querySelector('#nav2');
const nav3Button = document.querySelector('#nav3');
const nav4Button = document.querySelector('#nav4');

nav1Button.addEventListener('click', function(){ 
    console.log("HERE");
    location.href = "index.html"
}, false);
nav2Button.addEventListener('click', function(){ 
    location.href = "spel.html"
}, false);
nav3Button.addEventListener('click', function(){ 
    location.href = "design.html"
}, false);
nav4Button.addEventListener('click', function(){ 
    location.href = "cv.html"
}, false);