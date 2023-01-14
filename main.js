function addView() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://cloud.such.blue/api/setViews");
    xhttp.send();
}

window.onload = function() {
    fetch('https://api.github.com/repos/SuchBlue/such.blue/commits', {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("vcs").innerText = data[0].sha.slice(0, 7);
        document.getElementById("vcs").href = data[0].html_url;
    })
    .catch(error => console.error(error));

    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("views").innerText = `This site has been visited for ${this.responseText} times`;
    }
    xhttp.open("GET", "https://cloud.such.blue/api/getViews");
    xhttp.send();

    let time = new Date().getTime() - window.performance.timing.navigationStart;
    let seconds = Math.floor(time / 1000);
    let milliseconds = time % 1000;
    document.getElementById("time").innerText = `Loaded in ${seconds}.${milliseconds} seconds`;
    document.getElementById("time").style.marginBottom = `${window.innerHeight/4}px`;

    addView();
}