const express = require("express")
const bodyParser = require("body-parser")
const path = require('path')
const fs = require("fs")
const cors = require("cors")

const app = express()
const PORT = 8888

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const dbPath = path.join(__dirname, 'db.json')

app.get("/", (req, res) => {
    fs.readFile(dbPath, (err, json) => {
        let obj = JSON.parse(json)
        res.json(obj)
    });
});

app.post("/", (req, res) => {
    if (!req.body) {
        return res.sendStatus(400)
    }

    fs.readFile(dbPath, "utf8", (err, data) => {
        const db = JSON.parse(data)
        console.log(db)
        db.push(req.body)
        const json = JSON.stringify(db)
        fs.writeFile(dbPath, json, 'utf8', (err, data) => {
            res.send(json)
        })
    });

});

app.delete("/:id", (req, res) => {
    const { id } = req.params

    fs.readFile(dbPath, "utf8", (err, data) => {
        const db = JSON.parse(data)

        db = db.filter(el => {
            return el.id !== id
        })

        const json = JSON.stringify(db)

        fs.writeFile(dbPath, json, 'utf8', (err, data) => {
            res.send(json)
        })
    });

});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));