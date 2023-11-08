let timer;
isRunning=false;
let hours=0;
let minutes=0;
let seconds=0;

const timerHour=document.getElementById("hour");
const timerMinute=document.getElementById("minutes");
const timerSeconds=document.getElementById("seconds");

function update(){
    timerHour.innerHTML=hours<10? "0"+ hours:hours;
    timerMinute.innerHTML=minutes< 10? "0"+minutes:minutes;
    timerSeconds.innerHTML=seconds<10? "0"+seconds:seconds;
    
}


function timerStart(){
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
        if(minutes== 60){
            minutes=0;
            hours++;
        }
    }
    update();
}


function start(){
    if(isRunning == false){
        timer = setInterval(timerStart,1000);
        isRunning=true;
    }
    
    
}

function reset(){
    hours=0;
minutes=0;
seconds=0;

isRunning=false;
update();
pause();
}

function pause(){
    clearInterval(timer);
    isRunning=false;
}



