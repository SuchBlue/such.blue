const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const os = require('os');
const osu = require('node-os-utils')

let cpuUsage;

function getCPU() {
	osu.cpu.usage()
	.then(cpuPercentage => {
		cpuUsage = cpuPercentage;
	});
}

app.get('//stats', (req, res) => {
	let usedmem = os.totalmem() - os.freemem();

	let summary = {
		cpu: cpuUsage,
		ram: (Math.round((usedmem / os.totalmem()) * 10000) / 100),
		cpuFreq: (os.cpus()[0].speed / 1000).toFixed(2),
		usedmem: (usedmem / 1000000000).toFixed(2),
		totalmem: (os.totalmem() / 1000000000).toFixed(1),
	}
	res.send(JSON.stringify(summary));
});

app.get('//getViews', (req, res) => {
	fs.readFile('views', 'utf-8', function(err, data) {
		if(err) console.log(err);
		res.send(data);
	});
});

app.post('//setViews', (req, res) => {
	fs.readFile('views', 'utf-8', function(err, data) {
		if(err) console.log(err);

		fs.writeFile('views', (parseInt(data) + 1).toString(), function(err) {
			if(err) console.log(err);
		});
	});
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  if(!fs.existsSync("views")) {
  	fs.writeFile('views', '0', function(err) {
		if(err) console.log(err);
	})
  }

  getCPU(); setInterval(getCPU, 5000);
});
