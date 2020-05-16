const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    user:'myuser',
    database:'mytestdb',
    password:'mypass'
})
connection.query(
    `INSERT INTO persons(name,age,city)VALUES(
        
    )`
)
