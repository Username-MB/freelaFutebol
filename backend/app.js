const express = require('express');
const app = express();
const db = require('./db')
app.use(express.json());



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`localhost:${PORT}`);
});