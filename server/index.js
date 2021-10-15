const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config()


const app = express();

// requerir ruta.
// const personalRoutes = require('./routes/personal');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.get('/', (req, res) => {
    res.send('bien configurado')
})
// rutas
// app.use('/api', routesConfiguracion);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
