const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const cors = require("cors")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const dbPath = './db.json'

app.post("/", (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }

    fs.readFile(dbPath, "utf8", (err, data) => {
        const db = JSON.parse(data)
        console.log(db);
        db.push(req.body)
        const json = JSON.stringify(db)
        fs.writeFile(dbPath, json, 'utf8',(err, data)=>{
            res.send(json)
        })
    });

});

app.get("/", (req, res) => {
    fs.readFile(dbPath, (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

app.listen(3000, ()=>console.log(`Server started on port ${3000}`));