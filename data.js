function load() {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const responseJSON = JSON.parse(this.responseText);
        document.getElementById("cpuStat").innerText = `${responseJSON.cpu}% (${responseJSON.cpuFreq}GHz)`;
        document.getElementById("memStat").innerText = `${responseJSON.usedmem}/${responseJSON.totalmem}GB ${responseJSON.ram}%`;
    }
    xhttp.open("GET", "https://home.such.blue/api/stats");
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState !== 4) {
            return;
        }
        if (xhttp.status === 200) {
            document.getElementById("status").innerText = "Status: Online";
        } else {
            document.getElementById("status").innerText = "Status: Offline";
            document.getElementById("cpuStat").innerText =
            document.getElementById("memStat").innerText = "Server is down";
        }
    };
    xhttp.send();
}
load();
setInterval(load, 8000);