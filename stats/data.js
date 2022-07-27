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
        document.getElementById("cpuStat").innerText = `${Math.round(cpuUsage * 100) / 100}% (3.6GHz)`;
        // ^^ I don't know how I'll be able to get the CPU frequency, so I've just hardcoded it so far ~SuchBlue
        document.getElementById("memStat").innerText = `${(ramUsage / 1000).toFixed(2)}/${(totalRam / 1000).toFixed(1)}GB ${Math.round((ramUsage / totalRam) * 10000) / 100}%`;
    }
    xhttp.open("GET", "https://home.such.blue/netdata/api/v1/allmetrics?format=json");
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState !== 4) {
            return;
        }
        if (xhttp.status === 200) {
            document.getElementById("status").innerText = "Online";
        } else {
            document.getElementById("status").innerText = "Offline";
            document.getElementById("cpuStat").innerText =
            document.getElementById("memStat").innerText = "Server is down";
        }
    };
    xhttp.send();
}
load();
setInterval(load, 10000);