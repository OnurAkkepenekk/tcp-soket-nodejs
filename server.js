var net = require("net");
const readline = require("readline");

var HOST = "0.0.0.0";
var PORT = 6969;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

net
  .createServer(function (sock) {
    console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);
    sock.on("data", function (data) {
      console.log("DATA " + sock.remoteAddress + ": " + data);
      rl.question("Text to send to client: ", (answer) => {
        sock.write(`${answer}`);
      });
    });
    sock.on("close", function (data) {
      console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort);
    });
  })
  .listen(PORT, HOST);
console.log("Server listening on " + HOST + ":" + PORT);