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
      res.status(201).send(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
          <meta charset="UTF-8">
          <title>Ваша регистрация важна для нас!!!!</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #f9f9f9;
              font-family: Arial, sans-serif;
            }
            .message {
              font-size: 2.5rem; 
              color: #ff69b4;   
              text-align: center;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="message">Ваша регистрация важна для нас!!!!!!</div>
        </body>
        </html>
      `);
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});