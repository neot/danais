var dgram = require("dgram");
var tls = require('tls');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

var server = tls.createServer(options);

server.on("error", function (err) {
  console.log("server error:\n" + err.stack);
  server.close();
});

server.on("secureConnection", function (cleartextStream) {
  cleartextStream.on('data', function(data){
    console.log("server got: " + data + " from " + rinfo.address + ":" + rinfo.port);
    var message = new Buffer(data);
    var client = dgram.createSocket("udp4");
    client.send(message, 0, message.length, 53, "192.168.1.1", function(err, bytes) {
      if(err){
        return console.log(err.message);
      }
      client.on("message", function(res, dnsinfo){
        cleartextStream.send(res);
        client.close();
      }); 
    });
  });
});

server.on("listening", function (){
  var address = server.address;
  console.log("server listening " + address.address + ":" + address.port);
});

server.listen(53);
