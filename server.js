const express = require('express'); //untuk memanggil library express js
const bodyParser = require('body-parser'); //untuk memanggil library body parser
const app = express(); //memanggil  express js


//parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server started on port`);
});