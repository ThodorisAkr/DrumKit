//first listen for keydown event..

window.addEventListener('keydown', function(e){

    //Then find the audio element by selector
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    
    //find key element to make css
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    key.classList.add('playing');
    console.log(key);
    
    //stop the function if the button pressed has no responding audio
    if(!audio) return; 
    
    //set audio's time to the start so it can 
    //play again every time the button is pressed
    audio.currentTime = 0; 

    audio.play(); //play the sound
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach( item => {
    item.addEventListener('transitionend',removeTransition);
});

