window.onload = function() {
    let time = new Date().getTime() - window.performance.timing.navigationStart;
    let seconds = Math.floor(time / 1000);
    let milliseconds = time % 1000;
    let elem = document.getElementById("time");
    elem.innerHTML = `Loaded in ${seconds}.${milliseconds} seconds`;
    elem.style.opacity = 0.5;
}