"use strict";

const port = 3000,
	http = require("http"),
	httpStatus = require("http-status-codes"),
	app = http.createServer();

const getJSONString = obj => {
 return JSON.stringify(obj, null, 2); //convert javascript to string
}

app.on("request",(req, res) => { //listen for requests
	var body = [] // Create an array to hold chunk contents
	req.on("data", (bodyData) => {  // process it in another callback function
	  body.push(bodyData);  // add received data to body array
	});

	req.on("end", () => {  //run code when data transmission ends
		body = Buffer.concat(body).toString(); //convert the body array to the string of text
		console.log(`Request Body Contents: ${body}`);
	                  
	});// log request contents to console  
        console.log(`Method:${getJSONString(req.method)}`); //log the http method used
        console.log(`URL :${getJSONString(req.url)}`); //log the request url
	console.log(`Headers:${getJSONString(req.headers)}`); //log request headers

	res.writeHead(httpStatus.OK, {
             "Content-Type": "text/html"
	});
        
	let responseMessage = "<h1>This will show on the screen.</h1>";
	res.end(responseMessage);

       });
       app.listen(port);
       console.log(`The server has started ans is listening on port number: ${port} `);
