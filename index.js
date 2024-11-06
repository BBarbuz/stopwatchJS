const clock = document.getElementById("clock");
timer = null;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

function start(isReset){

    if((isRunning == false) || isReset){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
    console.log(startTime);
}

function stop(){
    if(isRunning == true){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}

function reset(){
    clearInterval(timer);
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    clock.textContent = `00:00:00:00`;

    if(isRunning == true){
        start(true);
    }else{
        isRunning = false;
    }
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
