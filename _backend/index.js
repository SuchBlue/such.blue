const rateLimit = require('express-rate-limit');
const express = require('express');
const app = express();
const port = 3000

const os = require('os');
const osu = require('node-os-utils');

const limiter = rateLimit({
	windowMs: 10000, // in ms
	max: 8, // maximum requests per time mentioned above
	standardHeaders: true,
	legacyHeaders: false
});

let cpuUsage;

function getCPU() {
	osu.cpu.usage()
	.then(cpuPercentage => {
		cpuUsage = cpuPercentage;
	});
}

app.use(limiter);
app.get('/', (req, res) => {
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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);

  getCPU(); setInterval(getCPU, 5000);
});
