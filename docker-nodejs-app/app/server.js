const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Salut Je m'appelle René Tamwo,je suis passionné par l'ingénieurie cloud Devops.");
});

app.listen(port, () => {
  console.log(`Le serveur fonction en HTTP://localhost:${port}`);
});
