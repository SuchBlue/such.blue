const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

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
