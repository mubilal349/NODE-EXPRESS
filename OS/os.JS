const os = require("os");

console.log("Arch",os.arch());
console.log("platform",os.platform());

console.log("UserInfo",os.userInfo());

console.log("CPUS",os.cpus());

console.log("FREEMEMORY",os.freemem());

console.log("HOSTNAME",os.hostname());

console.log(os.networkInterfaces()); // return the network address of os

console.log("DIR",os.tmpdir()); //Returns the operating system's default directory for temporary files