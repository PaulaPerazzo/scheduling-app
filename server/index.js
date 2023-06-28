const express = require("express");

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api", (req, res) => {
    res.json({
        message: 'hello world',
    });
});

app.listen(port, () => {
    console.log('server running');
});
