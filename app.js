// Import third-party module
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
// Variable for port
const port = 3000

// Basic setup using EJS with Express JS
app.set('view engine', 'ejs')
// Basic setup using EJS with Express JS
app.use(expressLayouts)
// Functions to switch directory in URL
app.get('/', (req, res) => {
    res.render('index', {
        name : 'Nathanure',
        title : 'Home',
        layout : 'layout/html'
    });
})
app.get('/about', (req, res) => {
    res.render('about', {
        name : 'Nathanure',
        title : 'About',
        layout : 'layout/html'
    });
})
app.get('/contact', (req, res) => {
    contact = [
        {
            name : 'Nathan',
            email : 'nathan@gmail.com'
        },
        {
            name : 'Sava',
            email : 'sava@gmail.com'
        },
        {
            name : 'Bintang',
            email : 'bintang@gmail.com'
        }
    ]
    res.render('contact', {
        name : 'Nathanure',
        title : 'Contact',
        layout : 'layout/html',
        contact
    });
})
// :id is to give url a parameter
app.get('/product', (req, res) => {
    // To callback the parameters that are in the URL, use req.params.id
    // To callback the query from URL, use ?<queryName>=<input>
    // before ? sign you can put an :id, make sure to define it first
    // And make sure the query in URL is the same as <queryName> in the code 
    res.send(`Product ID: ${(req.params.id)}<br>Category: ${(req.query.idCat)}`);
})
app.use('/', (req, res) => {
    res.status(404)
    res.send('Page Not Found 404')
})

app.listen(port, () => {
    console.log(`Example app on port ${(port)}`)
})