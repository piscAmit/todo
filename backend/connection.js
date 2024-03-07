const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:"",
    database: "useData"
});


//const con2 = mysql.
//connection bna ya na bna check krne ke liye

// con.connect((err)=>{
//     if(err){
//         console.warn("error")
//     }
//     else{
//         console.warn("connected")
//     }
// });

// fetch data from database

// con.query("select * from daily_activity", (err, result)=>{
//     console.warn("result",result)
// })

module.exports =con;