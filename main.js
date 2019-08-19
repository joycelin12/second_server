"use strict";

const port = 3000,
	http = require("http"),
	httpStatus = require("http-status-codes"),
	app = http.createServer();

const getJSONString = obj => {
 return JSON.stringify(obj, null, 2); //convert javascript to string
}

app.on("request",(req, res) => { //listen for requests
	res.writeHead(httpStatus.OK, {
		"Content-Type": "text/html"
	}); //prepare a response

        let responseMessage = "<h1>This will show on the screen.</h1>";
	res.end(responseMessage);

        console.log(`Method:${getJSONString(req.method)}`); //log the http method used
        console.log(req.url); //log the request url
	console.log(req.headers); //log request headers



});

app.listen(port);
console.log(`The server has started and listening on port number: ${port}`);

