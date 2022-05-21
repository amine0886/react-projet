
const Joi = require('joi');
const express = require('express');
const app = express();
const books = require('./db.json');
const mysql = require("mysql");
const dotenv = require('dotenv');
const path = require('path');


dotenv.config({ path: './.env'});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// Parce URL-dncoded bodies (as send by HTML froms)
app.use(express.urlencoded({ expended: false }));
//Parse JSON bodies (as send by API)
app.use(express.json());

console.log(__dirname);
app.set('view engine','hbs');

db.connect((error)=>{
    if(error) {
        console.log(error)
    }else{
        console.log("MYSQL connected...")
    }
})

/*
dotenv.config({ path: './.env'});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error)=>{
    if(error) {
        console.log(error)
    }else{
        console.log("MYSQL connected...")
    }
})
app.get('/', (req, res)=> {
    // res.send('home page')
    res.render("indexx");
});

app.get('/register', (req, res)=> {
    // res.send('home page')
    res.render("register");
});
*/
// Middleware
app.use(express.json())


// definir Routes
app.use('/',require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.get('/api/books', (req,res) => {
    res.status(200).json(books)
})


app.get('/api/books', (req,res) => {
    res.send(books);
});

app.post('/api/books', (req,res) => {
    const { error} = validateBook(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }


    const book = {
        id:books.length + 1,
        title: req.body.title,
        isbn:req.body.isbn,
        pageCount: req.body.pageCount
    };
    books.push(book);
    res.send(book);
});

app.put('/api/books/:id', (req, res)=> {
    // loockup
    // if note return 404
    const book = books.find(c => c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('The books with given ID was note found');
    
    
    
   
    // validation
    // if invalide return 400-bad request
    const { error} = validateBook(req.body);
    if(error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    // update course
    book.title = req.body.title;
    book.isbn = req.body.isbn;
    book.pageCount = req.body.pageCount;
    // return the updates course
    res.send(book);
    });


    app.delete('/api/books/:id', (req, res)=> {
        const book = books.find(c => c.id === parseInt(req.params.id));
        if(!book) res.status(404).send('The books with given ID was note found');
    

        const index = books.indexOf(book);
        books.splice(index,1);

        res.send(book);
    });



    function validateBook(book){
        const schema ={
            title: Joi.string().min(3).required(),
            isbn: Joi.string().min(3).required(),
            pageCount: Joi.string().min(3).required()
        };
        
        return Joi.validate(book, schema);
    }
    

app.get('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('The books with given ID was note found');
    res.send(book);
    
});





/*
app.post('/books', (req,res) => {

app.listen(8080, () => {
    console.log("Serveur à l'écoute")


})*/
const port = process.env.PORT || 8080;
app.listen(8080, () => console.log("listening on port  ${8080}..."))


