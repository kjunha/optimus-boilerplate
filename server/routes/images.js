var express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql');
const dbconfig = require('../config/dbconfig');
var router = express.Router();
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/')
    },
    filename: function(req,file, cb) {
        const filename = new Date().valueOf() + '-' + file.originalname;
        cb(null, filename);
    },
})
var upload = multer({
    storage: storage,
})
var connection = mysql.createConnection(dbconfig);
connection.connect();

router.post('/upload', upload.single('image'), (req, res) => {
    if(req.file) {
        connection.query(
            `insert into gallery (source_url, artist, description) values (?,?,?)`,
            [`http://localhost:3000/public/images/${req.file.filename}`, req.body.artist, req.body.description],
            (err, rows) => {
                if(err) console.error(err);
                return res.json('done');
            }
        )
    } else {
        return res.status(401).send('no file defined')
    }
})

router.get('/', (req, res) => {
    connection.query(
        `select * from gallery`,
        (err, rows) => {
            if(err) {
                console.log(err);
                return res.status(401).json('error')
            }
            return res.json(rows);
        }
    )
})

module.exports = router;