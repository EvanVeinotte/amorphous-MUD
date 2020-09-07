const express = require("express");
const app = express();

const PORT = 4422;

app.get('/', (req, res) => {
    res.send('<h1>stinky</h1>');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});