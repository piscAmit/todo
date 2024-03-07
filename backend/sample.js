const express=require('express');
const cors=require('cors');
const server=express();

server.use(express.json());
server.use(cors());
const con=require('./config');
server.get('/',(req,res)=>{
    con.query("SELECT * FROM teachers",(err,result)=>{
        if(err){
            res.send("err");
        }
        else{
            res.send(result)
        }
    })
})


// server.post('/',(req,res)=>{
//     const data={name:'pandey',salary:'4000',Qualification:'b.tech'};
//     con.query('INsert INTO  teachers set ? ', data,(err,result,fields)=>{
//         if(err){
//             res.send('err')
//         }

//         else{
//             res.send(result);
//         }
//     })
// })


server.post('/',(req,res)=>{
    const data= req.body;
    con.query('INsert INTO  teachers set ? ', data,(err,result,fields)=>{
        if(err){
            res.send('err')
        }

        else{
            res.send(result);
        }
    })
})




server.listen(8081,()=>{
    console.log('server is running on 8080')
})