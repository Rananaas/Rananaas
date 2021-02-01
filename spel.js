/// makes sure video stops playing when modal closed:

$('#spel7Modal').on('hidden.bs.modal', function () {
    // const movie = document.querySelector('#movieinmodal');
    // movie.pause();
    console.log("modal 7 closed")
    $('#movieinmodal7a')[0].pause();
    $('#movieinmodal7b')[0].pause();
    $('#movieinmodal7c')[0].pause();
    $('#movieinmodal7d')[0].pause();
    $('#movieinmodal7e')[0].pause();
    $('#movieinmodal7f')[0].pause();
    $('#movieinmodal7g')[0].pause();
    $('#movieinmodal7h')[0].pause();
});

$('#spel2Modal').on('hidden.bs.modal', function(){ 
    console.log("modal2 closed")
    $('#movieinmodal2a')[0].pause();
    $('#movieinmodal2b')[0].pause();
    $('#movieinmodal2c')[0].pause();
});