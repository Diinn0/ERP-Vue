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
    {db:
        {
            host: process.env.host + ':' + process.env.port,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database,
            connectTimeout: 60000
        }
    });


app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});