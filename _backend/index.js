const { RateLimiterMemory } = require('rate-limiter-flexible');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

const rateLimiter = new RateLimiterMemory({
    points: 3,
    duration: 120
});

const limiter = async(req, res, next) => {
    try {
        await rateLimiter.consume(req.connection.remoteAddress);
        next();
    } catch(error) {
        res.set({
            "Retry-After": error.msBeforeNext / 1000,
            "X-RateLimit-Reset": new Date(Date.now() + error.msBeforeNext)
        });
        return res.status(429).send({error: "Too many requests."})
    }
}

app.get('//getViews', /*limiter,*/ (req, res) => {
	fs.readFile('views', 'utf-8', function(err, data) {
		if(err) console.log(err);
		res.send(data);
	});
});

app.post('//setViews', limiter, (req, res) => {
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
});
