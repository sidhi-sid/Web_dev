const mysql=require('mysql2')
const connection=mysql.createConnection({
    host:'localhost',
    user:'myuser',
    passoword:'mypass',
    database:'mytestdb'
})
function getallusers(){
    return new Promise(function(resolve,reject){
        connection.query(
            `SELECT * FROM persons`,
            function(err,rows,cols){
                if(err){
                    reject(err)
                }else{
                    resolve(rows)
                }
            }
        )
    })
}
exports=module.exports=