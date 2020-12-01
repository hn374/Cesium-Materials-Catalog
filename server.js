const express = require('express');
var cors = require('cors');
var app = express();
var PORT = 3000;

app.use(cors());

app.get('/materials', function(req, res) {
    res.send([
        {
            id: 0,
            name: "Graphite",
            color: "Blue",
            volume: 3000,
            cost: 10,
            deliveryDate: "3/6/20"
        },
        {
            id: 1,
            name: "Marble",
            color: "Red",
            volume: 400,
            cost: 5,
            deliveryDate: "9/3/20"
        },
        {
            id: 2,
            name: "Copper",
            color: "Yellow",
            volume: 100,
            cost: 50,
            deliveryDate: "8/6/20"
        }]);
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});