window.onload = function(){
    var seconds = 0;
    var tens = 0;
    var interval;

    document.getElementById("start").onclick = function(){
        clearInterval(interval);
        interval = setInterval(timeStart,10);
    }
    document.getElementById("stop").onclick = function(){
        clearInterval(interval);
    }
    document.getElementById("reset").onclick = function(){
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        document.getElementById("tens").innerHTML = tens;
        document.getElementById("seconds").innerHTML = seconds;
    }
    function timeStart(){
        tens++;
        if(tens <= 99){
            document.getElementById("tens").innerHTML = tens;
        }
        if(tens > 99){
            console.log("seconds");
            seconds++;
            document.getElementById("seconds").innerHTML = seconds;
            tens = 0;
            document.getElementById("tens").innerHTML = 0;
        }
        if(seconds > 9){
            document.getElementById("seconds").innerHTM = seconds;
        }
    }
}
