const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res) => {
    console;(req.body);
  
   
    const { name, email, password, passwordConfirm } = req.body;
    
    db.query('SELECT email FROM users where email = ?', [email], async (error, results) =>  {
        if(error){
            console.log(error);
        
        }
        if ( results.lenght > 0 ) {
            return res.render('register', {
                message: 'That email is alreadyin use'
            })
        } else if(password !==passwordConfirm) {
            return res.render('register', {
                message: 'Password do note match'
            });
        }
        //POUR decrypte le mot de passe

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        
        db.query('INSERT INTO users SET ?',{name: name,email:email,password: hashedPassword}, (error, results) => {
            if(error){
                console.log(error);
            } else {
                console.log(results)
                return res.render('register', {
                    message: 'User Registered'
                });
            }
        })
    });
    
}