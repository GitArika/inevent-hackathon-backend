import express from "express";

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/healthCheck', (req, res) => {
    res.send({message: "Hello World"});
  })

app.listen(port, () => {
    console.log(`\x1b[32mApp is running on port: ${ port} 🚀`);
})
