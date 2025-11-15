const express = require('express');
const path = require('path');
const fs = require("fs")
const app = express();
const port = 3000;

app.use(express.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/req-data', (req, res) => {
  console.log(">>>>>>>>>>>>>>>>>>>", req.body)
  fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err)=>{
    if(err) {
      res.status(500).send("User not addad")
    } else {
      res.status(201).send("User addad")
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});