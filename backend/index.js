const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser())
const TOKEN_SECRET = 'some very secret text'


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
const authMW = async (req, res, next) => {
    
    try {
      const { userId } = await jwt.verify(token, TOKEN_SECRET)
      req.user = userId
      next()
    } catch (error) {
      next(error)
    }
  }
// get all users

app.get('/alluser', async function(req, res) {
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
app.get('/food', async function(req, res) {
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

// get specific type of food
app.get('/food/:foodtype', async function(req, res) {
    let gFT = req.params.foodtype
    let qr = `select * from user where id = ${gFT}`;

    db.query(qr,(err,result) => {
        if(err) {
            console.log(err,'errs');
        }
        if(result.length >0) {
            res.send({
                message: 'all food with specifc type',
                data: result
            })
        }
    })
})
//get single data from Database

app.get('/user', async function(req, res){
    
    let qr = `select * from user where id = ${req.user.id}`;
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
app.post('/userregister', async function(req, res,next) {

    console.log(req.body,'insertdata');

    let fullName = req.body.fullname;
    let eMail = req.body.email;
    let pass = req.body.password;
    let profilepic = "none";
    
    const hashedPassword = await bcrypt.hash(pass, 12);
    var checkSql = `SELECT * FROM user WHERE email = '${eMail}'`;
    let qr = `insert into user (fullname,email,password,profilepic)
                values ('${fullName}','${eMail}','${hashedPassword}','${profilepic}')`;
                
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
                    
                    res.send({message:'Account Created'})
                })
            }

        }
    })
})
//login
app.post('/userlogin', async function(req, res,next){
    
    let eMail = req.body.email;
    let pass = req.body.password;
    var checkSql = `SELECT * FROM user WHERE email = '${eMail}'`;
    db.query(checkSql,(err,result) => {
        if (err) {console.log(err);}
        else {
            if(!result) {
                res.json({
                    message:"something went wrong",
                    data: result
                })
            }
            else {
                let user = result[0]
                
                
                if (!user) {
                    res.json({
                        message:"no user with this name",
                        data: result
                    })
                  } else {
                    bcrypt.compare(pass, user.password,async function(err, result) {
                        if (err){
                            console.log(err)
                          res.json({message:"wrong password",
                          data: result})
                        }
                        if (result ==true){
                            console.log(result);
                            const token =  await jwt.sign({ userId: user.id }, TOKEN_SECRET, {
                                expiresIn: '10h',
                              })
                            console.log(token)
                            
                            
                            res.cookie('auth', token, { httpOnly: true })
                            res.json({ data: user, token: token , message:"login succesful"});
                        } 
                        if (result ==false) {
                            console.log(result)
                          res.json({message:"wrong password entered",
                          data: result})
                        }
                          
                        
                      });
                    
                  }
            }
            
        }
    })
    

}

)

//update single data
app.post('/cart', async function (req, res) {
    
    
    token = req.headers["authorization"]
    const userid  = await jwt.verify(token, TOKEN_SECRET)

    let Foodid = req.body.Foodid
    let Userid = req.body.Userid

    try{
    
    
    let qr = `insert into Cart (Foodid,Userid)
                values ('${Foodid}','${Userid}')`;
    
    db.query(qr,(err,result) => {
        if (err) {
            console.log(err);
        }
        res.send({ 
            message: 'data updated',

        })

    });
    }
    catch (err) {
        res.send({message: err})
    }
})

// delete single data

app.delete('/user/:id',async function(req, res)  {

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
app.get('/usercart', async function(req, res) {

    let id = req.query.id;
    
    let qr = `select * from Cart where UserId = '${id}'`;
    
    db.query(qr,(err,result) => {
        if(err) {
            console.log(err,'errs');
        }
        else {
            res.send({
                message: 'all data from cart',
                data: result
            })
        } 
    })
})

app.listen(3000,() => {
    console.log('server listening on port 3000');
});