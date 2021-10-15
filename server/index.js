const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();

// requerir ruta.
const toDoRoutes = require('./routes/todo');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// ruta
app.use('/api', toDoRoutes);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
