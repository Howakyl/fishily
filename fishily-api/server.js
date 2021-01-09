const express = require("express");
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes');
const session = require('express-session');

const port = process.env.PORT || 4000;
const app = express();

let origin;
if (process.env.NODE_ENV === 'production') {
    origin = 'https://fishily-frontend.herokuapp.com';
} else {
    origin = 'http://localhost:3000';
}
const corsOptions = {
    origin: origin,
}

app.use(express.json());
app.use(cors(corsOptions));

//EXPRESS SESSION
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
}));

//API ROUTES
app.use("/api/fishily/users", routes.users);
app.use("/api/fishily/posts", routes.posts);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('fishily-client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'fishily-client', 'build', 'index.html'));
    });
}

//conection 
app.listen(port, () => console.log(`Server is running on port: ${port}`));
