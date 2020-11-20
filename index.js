
const poefButton = document.querySelector('#poef');
let poefAan = false;

poefButton.addEventListener('click', function () {
    if(!poefAan){
        console.log("in paf");
        poefButton.innerText = "PAF";
        poefAan =true;
    } else if(poefAan){ 
        console.log("in poef");
        poefButton.innerText ="POEF";
        poefAan = false;
    }

 })