const express = require("express")
const path = require('path')
const fs = require("fs")
const cors = require("cors")
const { nanoid } = require('nanoid')
const fileUpload = require('express-fileupload')

const app = express()
const PORT = 8888

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
app.use(fileUpload({}))

const dbPath = path.join(__dirname, 'db.json')
const imgFolderPath = path.resolve('../client/public/img')

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
        const obj = { id: nanoid() }
        obj.book = req.body
        try {
            const file = req.files.picture
            const fileName = nanoid() + '.jpg'
            const filePath = path.resolve(imgFolderPath, fileName)
            file.mv(filePath)
            obj.book.picture = fileName
        } catch (e) {
            console.log(e);
        }
        db.push(obj)
        const json = JSON.stringify(db)
        fs.writeFile(dbPath, json, 'utf8', (err, data) => {
            res.send(json)
        })
    });

});

app.delete("/:id", (req, res) => {

    const { id } = req.params

    fs.readFile(dbPath, "utf8", (err, data) => {
        let db = JSON.parse(data)
        db = db.filter(el => {
            if (el.id === id) {
                const filePath = path.resolve(imgFolderPath, el.book.picture)
                fs.unlinkSync(filePath)
            }
            return el.id !== id
        })

        const json = JSON.stringify(db)

        fs.writeFile(dbPath, json, 'utf8', (err, data) => {
            res.send(json)
        })
    });

});

app.put("/:id", (req, res) => {

    const { id } = req.params

    if (!req.body) {
        return res.sendStatus(400)
    }

    fs.readFile(dbPath, "utf8", (err, data) => {
        let db = JSON.parse(data)

        db.forEach(el => {
            if (el.id === id) {
                try {
                    const oldFilePath = path.resolve(imgFolderPath, el.book.picture)
                    fs.unlinkSync(oldFilePath)
                } catch (e) {
                    console.log(e);
                }
                el.book = req.body
                try {
                    const file = req.files.picture
                    const fileName = nanoid() + '.jpg'
                    const filePath = path.resolve(imgFolderPath, fileName)
                    file.mv(filePath)
                    el.book.picture = fileName
                } catch (e) {
                    console.log(e);
                }
                return res.send(JSON.stringify(el))
            }
        });

        const json = JSON.stringify(db)

        fs.writeFile(dbPath, json, 'utf8', (err, data) => {
            // res.send(json)
        })
    });
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));