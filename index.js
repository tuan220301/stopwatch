window.onload = function(){
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var interval;
    var btnStart = document.getElementById("start");
    var btnStop = document.getElementById("stop");
    var btnReset = document.getElementById("reset");

    btnStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(timeStart,10);
    }
    btnStop.onclick = function(){
        clearInterval(interval);
    }
    btnReset.onclick = function(){
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    function timeStart(){
        tens++;
        if(tens <= 99){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = seconds;
            tens = 0;
            appendTens.innerHTML = 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTM = seconds;
        }
    }
}