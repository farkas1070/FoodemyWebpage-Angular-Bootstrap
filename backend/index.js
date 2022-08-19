const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyparser.json());


// database connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'farkas1070',
    database: 'foodemy',
    port: 3306
});

/// check database connection

db.connect(err => {
    if (err) {
        console.log(err,'dberr');}
    console.log('database connected')
})

// get all users

app.get('/user', (req, res) => {
    let qr = `select * from user`;

    db.query(qr,(err,result) => {
        if(err) {
            console.log(err,'errs');
        }
        if(result.length >0) {
            res.send({
                message: 'all user data',
                data: result
            })
        }
    })
})

// get all foods
app.get('/food', (req, res) => {
    let qr = `select * from food`;

    db.query(qr,(err,result) => {
        if(err) {
            console.log(err,'errs');
        }
        if(result.length >0) {
            res.send({
                message: 'all food data',
                data: result
            })
        }
    })
})
//get single data from Database

app.get('/user/:id',(req,res)=>{
    let gID = req.params.id
    let qr = `select * from user where id = ${gID}`;
    db.query(qr,(err,result)=>{

        if(err){
            console.log(err);
        }
        if(result.length > 0){
            res.send({
                message: 'get single data',
                data:result
            }); 
        }
        else {
            res.send({
                message: 'data not found'
            });
        }

    })
})
// register
app.post('/userregister',(req, res) => {

    console.log(req.body,'insertdata');

    let fullName = req.body.fullname;
    let eMail = req.body.email;
    let mb = req.body.mobile;
    var checkSql = `SELECT * FROM user WHERE email = '${eMail}'`;
    let qr = `insert into user (fullname,email,mobile)
                values ('${fullName}','${eMail}','${mb}')`;
                
    console.log(qr,'qr')   
    db.query(checkSql,(err,result) => {
        if(err) {console.log(err);}
        else {
            if (result.length > 0 ) {
                res.send({
                    message:'user already exists',
                });
            }
            else {
                db.query(qr,(err,result) => {
                    if(err) {console.log(err);}
                    console.log(result,'result')
                    res.send({
                        message:'data inserted',
                        data:result
                    });
                })
            }

        }

        
        
    })
})
//login
app.post('/userlogin', (req, res,next)=>{
    
    let eMail = req.body.email;
    let mb = req.body.mobile;
    var checkSql = `SELECT * FROM user WHERE email = '${eMail}' and mobile = '${mb}'`;
    db.query(checkSql,(err,result) => {
        if (err) {console.log(err);}
        else {
            if(result.length > 0) {
                res.send({ 
                    
                    message:"login succesful",
                    data: result
                })
            }
            else {
                res.json({
                    message:"something went wrong",
                    data: result
                })
            }
        }
        

        


    })

})




//update single data
app.put('/user/:id', (req, res)=>{


    console.log(req.body,'updatedata');

    let gID = req.params.id;
    let fullName = req.body.fullname;
    let eMail = req.body.email;
    let mb = req.body.mobile;
    let qr = `update user set fullname = '${fullName}', email = '${eMail}', mobile = '${mb}'
                where id = ${gID}`
    
    db.query(qr,(err,result) => {
        if (err) {
            console.log(err);
        }
        res.send({ 
            message: 'data updated',

        })


    });

 
})

// delete single data

app.delete('/user/:id',(req, res) => {

    let qID = req.params.id;

    let qr = `delete from user where id = '${qID}' `;
    db.query(qr,(err,result) =>{
        if (err) {
            console.log(err);
        }
        res.send({
            message: 'data deleted'
        })
    })
})

app.listen(3000,() => {
    console.log('server listening on port 3000');
});