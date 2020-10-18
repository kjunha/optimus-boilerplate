var mysql = require('mysql');
var dbconfig = require('../config/dbconfig');

var chats = (io) => {
    io.on('connection', (socket) => {
        var connection = mysql.createConnection(dbconfig);
        socket.on('join', (data) => {
            const client_id = socket.id.substring(8,16);
            let index = 0;
            connection.query(
                `select count(*) as idx from chat`,
                (err, rows) => {
                if(err) console.error(err)
                index = rows[0].idx;
                socket.emit('welcome', { client_id, index });
            })
        })
        socket.on('sendMessage', (data) => {
            console.log(`socket id: ${data.sender} send a message: ${data.message}`);
            connection.query(
                `insert into chat (message, sender) values (?,?)`,
                [data.message, data.sender],
                (err, rows) => {
                if(err) console.error(err)
                connection.query(
                    `select * from chat order by chat_id desc limit 1`,
                    (err, rows) => {
                    if(err) console.error(err)
                    io.emit('getMessage', {messages: rows})
                })
            })
        })
    })
}
module.exports = chats;