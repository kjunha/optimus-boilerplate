var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'mysql_db',
    port: 3307,
    user: 'root',
    password: 'mypass',
    database: 'test'
});
connection.connect();

router.get('/', (req, res) => {
    connection.query(`select * from task`, (err, rows) => {
        if(err) console.error(err);
        console.log('get test: \n' + JSON.stringify(rows, null, '\t'));
        res.json(rows);
    });
});

router.post('/new', (req, res) => {
    connection.query(`insert into task (title) values ('${req.body.task}')`, (err, rows) => {
        if(err) console.error(err);
        console.log('post test: \n' + JSON.stringify(rows, null, '\t'));
        res.json(rows);
    });
});

router.get('/:id', (req, res) => {
    connection.query(`select * from task where task_id = ${req.params.id}`, (err, rows) => {
        if(err) console.error(err);
        console.log('get test: \n' + JSON.stringify(rows, null, '\t'));
        res.json(rows);
    });
})

router.delete('/:id', (req, res) => {
    connection.query(`delete from task where task_id = ${req.params.id}`, (err, rows) => {
        if(err) console.error(err);
        console.log('delete test: \n' + JSON.stringify(rows, null, '\t'));
        res.json(rows);
    })
})

module.exports = router;