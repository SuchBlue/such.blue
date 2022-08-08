window.onload = function() {
    let time = new Date().getTime() - window.performance.timing.navigationStart;
    let seconds = Math.floor(time / 1000);
    let milliseconds = time % 1000;
    document.getElementById("time").innerText = `Loaded in ${seconds}.${milliseconds} seconds`;

    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("views").innerText = `This site has been visited for ${this.responseText} times`;
    }
    xhttp.open("GET", "https://home.such.blue/api/getViews");
    xhttp.send();
}