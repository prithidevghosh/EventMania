const express = require('express');
const port = process.env.PORT || 3000;
const homeroute = require('./routes/home');
const ejsLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const db = require('./config/db')
const passport = require('passport')
const session = require('express-session');
const LocalStrategy = require('./config/passport-local-strategy')
const MongoStore = require('connect-mongo');
const app = express();

app.use(express.static('./assets'))

app.use(express.urlencoded());
app.use(cookieParser())

app.use(ejsLayout);
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(session({
    name: 'EventMania',
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 100 },
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://prithidevghosh:39039820@cluster0.3amaqwo.mongodb.net/TechMania",
        autoRemove: 'disabled'
    })
}))

// console.log(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser)


app.use('/', homeroute);

app.listen(port, (e) => {
    if (e) {
        console.log("error in starting up server");
        return;
    }

    console.log(`server started at ${port}`);
})