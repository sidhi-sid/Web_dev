const mysql=require('mysql2')

const connection=mysql.createConnection({
    host:'localhost',
    user:'myuser',
    database:'mytestdb',
    password:'mypass'
})
connection.query(
    `SELECT * from persons`,
    function(err,rows,cols){//here results=rows and fields=cols
        if(err){    
            console.log(err);
        }
        else{
            console.log(rows);
            console.log(cols);
        }
        connection.close();
    }
)
