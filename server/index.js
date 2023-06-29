const express = require("express");
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.get("/api", (req, res) => {
    res.json({
        message: 'hello world',
    });
});

const database = [];
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/register", (req, res) => {
     const { username, email, password } = req.body;
    console.log('username', username);
    
    //👇🏻 checks if the user does not exist
    let result = database.filter(
        (user) => user.email === email || user.username === username
    );
    //👇🏻 creates the user's data structure on the server
    if (result.length === 0) {
        database.push({
            id: generateID(),
            username,
            password,
            email,
            timezone: {},
            schedule: [],
        });

        console.log('oi', database)
        return res.json({ message: "Account created successfully!" });
    }
    //👇🏻 returns an error
    res.json({ error_message: "User already exists!" });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
})

app.listen(port, () => {
    console.log('server running');
});
