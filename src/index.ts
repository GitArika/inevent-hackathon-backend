import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./config/database";

import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const port = process.env.PORT || 8080;

app.get('/healthCheck', (req, res) => {
    res.send({message: "Hello World"});
  });

AppDataSource.initialize().then(() => {
  console.log(`\x1b[32mDatabase connect! 🛡`);
}).catch((error) => { 
  console.log(`\u001b[31mDatabase Error details:`);
  console.log(error)
});

app.listen(port, () => {
    console.log(`\x1b[32mApp is running on port: ${ port} 🚀`);
});
