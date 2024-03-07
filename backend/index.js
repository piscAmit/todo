const express=require('express');
const cors=require('cors');


const con=require('./connection');
const server=express();

// server ka start

// server.get('/',(req,res)=>{
//     res.send("hello");
// })


server.use(express.json());
server.use(cors());

// server.post('/',(req,res) => {
//     const sql = "SELECT * FROM users WHERE Email = ? AND Password = ?";
//     db.query(sql, [req.body.Email, req.body.Password], (err, data) =>{
//         if(err)  return res.json({Message:"Server Side Error"});
      
//         else{
//             return res.json({Massage: "No Record existed"});
//         }
//     })
// })
// database me data bhejne ke liye
server.get('/',(req,res)=>{
    con.query("SELECT * FROM users",(err,result)=>{
        if(err){
            res.send("err");
        }
        else{
            res.send(result)
        }
    })
})

server.post('/',(req,res)=>{
    const data= req.body;
    con.query('INsert INTO users set ? ', data,(err,result,fields)=>{
        if(err){
            res.send('err')
        }

        else{
            console.log(result)
            res.send(result);
        }
    })
})


// // server ka end or code hamesa bich me krte h.
server.listen(8080, ()=>{
    console.log('sever started')
})
