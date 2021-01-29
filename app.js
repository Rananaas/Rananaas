const leftButton = document.querySelector('#leftback');
const rightButton = document.querySelector('#rightback');
const bannerButton = document.querySelector('#homebanner');
const zoekwerkbanner = document.querySelector('#zoekwerkbanner');


bannerButton.addEventListener('click', function(){ 
    console.log("banner clicked!");
    location.href = "index.html"
}, false);

leftButton.addEventListener('click', function(){ 
    console.log("leftbutton clicked!");
    location.href = "spel.html"
}, false);

rightButton.addEventListener('click', function(){ 
    console.log("rightbutton clicked!");
    location.href = "design.html"
}, false);


zoekwerkbanner.addEventListener('click', function(){ 
    location.href = "cv.html"
}, false);

