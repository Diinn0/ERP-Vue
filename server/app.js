const express = require("express");
const {createConnection} = require("mysql");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const connection = createConnection(
    {
        db:
        {
            host: process.env.host + ':' + process.env.port,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
            connectTimeout: 60000
        }
    });

const stocks =
 [
    {
        id: 1,
        id_obj: 1,
        quantite: 15,
        date_ajout: 151023,
        type: "piece"
    },
    {
        id: 2,
        id_obj: 2,
        quantite: 20,
        date_ajout: 161023,
        type: "piece"
    }
];

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.get("/models", (req, res) => {
    res.json({ message: "models" });
});

app.get("/pieces", (req, res) => {
    res.json({ message: "pieces" });
});

app.get("/stocks", (req, res) => {
    res.json({ data: stocks });
});

app.get("/stock/:id", (req, res) => {
    res.json({ message: "stocks / piece." + req.params.id });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
