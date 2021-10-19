var net = require("net");
const readline = require("readline");

//Server olarak kullanılan bilgisayarın IP adresi verilmelidir
var HOST = "";
var PORT = 6969;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var client = new net.Socket();
client.connect(PORT, HOST, function () {
  console.log("CONNECTED TO: " + HOST + ":" + PORT);
  rl.question("Text to send to server? ", (answer) => {
    client.write(`${answer}`);
  });
});

client.on("data", function (data) {
  console.log("DATA: " + data);
  rl.question("Text to send to server: ", (answer) => {
    client.write(`${answer}`);
  });
});

client.on("close", function () {
  console.log("Connection closed");
});
