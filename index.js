/* Dotenv config */

const dotenv = require('dotenv');
dotenv.config();
const { SERVER_PORT } = process.env;

/* Sequelize */

const sequelize = require('./database/db.config');

/* Express configs */

const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.listen(SERVER_PORT, () => {
    sequelize.authenticate()
        .then(() => {

            /* Importer vos models puis décommenter les trois lignes en bas pour créer vos tables dans la base de données */

            // sequelize.sync(/*{force: true}*/)
            // .then(() => console.log("DB seed successfully"))
            // .catch(err => console.log(err.message));


            console.log("Connecté à la DB ");
        })
        .catch((err) => console.log("Erreur lors de la connexion à la DB:" + err.message));
    console.log(`L'application tourne sur le port ${SERVER_PORT}`);
})

/* Route config */

const authRoute = require('./routes/authRoute');

app.use('/auth', authRoute);

/* CORS config */

const cors = require('cors');

app.use(cors({
    // origin: "http://localhost:3000",
    origin: "*",
    credentials: true
}));

