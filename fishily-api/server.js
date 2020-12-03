const express = require("express");
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes');
const session = require('express-session');

const port = process.env.PORT || 4000;
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
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

//conection 
app.listen(port, () => console.log(`Server is running on port: ${port}`));