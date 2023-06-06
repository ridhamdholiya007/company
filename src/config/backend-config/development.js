const fs = require('fs');
const config = {
    development: {
        username: "root",
        password: "root",
        database: "company",
        host: "127.0.0.1",
        port: 26257,
        dialect: "postgres",
        // dialectOptions : {
        //   ssl : {
        //     ca : fs.readFileSync('/home/ad.rapidops.com/ridham.dholiya/certs/ca.crt').toString(),
        //     key : fs.readFileSync('/home/ad.rapidops.com/ridham.dholiya/certs/client.root.key').toString(),
        //     cert : fs.readFileSync('/home/ad.rapidops.com/ridham.dholiya/certs/client.root.crt').toString()
        //   }
        // }
      },
}

module.exports = config;