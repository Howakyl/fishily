const express = require('express');
require('dotenv').config();
// const cors = require('cors');
// const routes = require('./routes');

const port = process.env.PORT || 4000;
const app = express();

// const corsOptions = {
//     origin: 'http://localhost:3000'
// }

app.use(express.json());
// app.use(cors(corsOptions));

//API ROUTES
// ----> PUT ROUTES HERE <----

//conection 
app.listen(port, () => console.log(`Server is running on port ${port}`));