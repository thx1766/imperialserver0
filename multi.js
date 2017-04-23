var application_root = "/home/ubuntu/multi/";
var express = require('express');
var vhost = require('vhost');

function createVirtualHost(domainName, dirPath) {
	return vhost(domainName, express.static(dirPath));
}

var app = express();

var workzonehost = createVirtualHost("workzone.imperialcostestimator.click","workzone");
//var basehost = createVirtualHost("imperialcostestimator.click","basehost");

app.use(workzonehost);
//app.use(basehost);

var port=82;
app.listen(port, function() {
console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});
