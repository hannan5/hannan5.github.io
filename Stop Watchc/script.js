window.onload = function(){

    var min = 00;
    var seconds = 00;
    var tens = 00;
    appendmin = document.getElementById('min')
    var appendseconds = document.getElementById('seconds');
    var appendtens = document.getElementById('tens');

    var buttonStart = document.getElementById('button-start');
    var buttonStop  = document.getElementById('button-Stop');
    var buttonReset = document.getElementById('button-Reset');

    var intervel;

    buttonStart.onclick = function(){
        // clearInterval(intervel);
        intervel = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(intervel);
    }
    buttonReset.onclick = function(){
        clearInterval(intervel);
        min = '00';
        tens = '00';
        seconds = '00';
        appendmin.innerHTML = min;
        appendtens.innerHTML = tens;
        appendseconds.innerHTML = seconds;
    }

    function startTimer(){
        tens++;
    
    if(tens<=9){
        appendtens.innerHTML = '0' + tens;
    }

    if(tens>9){
        appendtens.innerHTML = tens;
    }

    if(tens>99){
        console.log('Seconds');
        seconds++;
        appendseconds.innerHTML = '0' + seconds;
        tens = 0;
        appendtens.innerHTML = '0' + 0;
    }

    if(seconds>9){
        appendseconds.innerHTML = seconds;
    }
    if(seconds>59){
        console.log(min);
        min++;
        appendmin.innerHTML = '0' + min;
        seconds = 0;
        appendseconds.innerHTML = '0' + 0;
    }


}

}
