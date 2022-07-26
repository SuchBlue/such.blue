window.onload = function() {
    let time = new Date().getTime() - window.performance.timing.navigationStart;
    let seconds = Math.floor(time / 1000);
    let milliseconds = time % 1000;
    let elem = document.getElementById("time");
    elem.innerHTML = `Loaded in ${seconds}.${milliseconds} seconds`;
    elem.style.opacity = 0.5;
}

function load() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const responseJSON = JSON.parse(this.responseText
                .replace('"system.cpu"', '"systemcpu"')
                .replace('"system.ram"', '"systemram"'));
            
        const cpuUsage = responseJSON.systemcpu.dimensions.user.value + responseJSON.systemcpu.dimensions.system.value;

        const totalRam = responseJSON.systemram.dimensions.used.value
            + responseJSON.systemram.dimensions.free.value
            + responseJSON.systemram.dimensions.cached.value
            + responseJSON.systemram.dimensions.buffers.value;
            
        const ramUsage = responseJSON.systemram.dimensions.used.value;
        document.getElementById("cpuinfo").innerText = `CPU: ${Math.round(cpuUsage * 100) / 100}%`;
        document.getElementById("raminfo").innerText = `RAM: ${Math.round((ramUsage / totalRam) * 10000) / 100}%`;   
    }
    xhttp.open("GET", "https://home.such.blue/netdata/api/v1/allmetrics?format=json");
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState !== 4) {
            return;
        }
        if (xhttp.status === 200) {
            document.getElementById("status").innerText = "Status: Online";
        } else {
            document.getElementById("status").innerText = "Status: Offline";
        }
    };
    xhttp.send();
}
load();
setInterval(load, 10000);