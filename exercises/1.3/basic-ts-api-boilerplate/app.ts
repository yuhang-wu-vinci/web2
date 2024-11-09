import express from "express";

import pizzaRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let getRequestCount = 0;

// Middleware pour enregistrer et afficher les statistiques des requêtes GET
app.use((req, _res, next) => {
    if (req.method === 'GET') {
        getRequestCount++;
        console.log(`GET counter : ${getRequestCount}`);
    }
    next();
});




app.use("/films", pizzaRouter);

export default app;
