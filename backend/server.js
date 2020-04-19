const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const apiPort = process.env.PORT || 5000;
const mongoose = require('mongoose');
const passport = require('./passport');

//ROUTE REQUIRES
const user = require('./routes/user');
const recipeRouter = require('./routes/recipes');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

app.use(
	session({
        secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
        resave: false, //required
        saveUninitialized: false //required
	})
)

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

// PASSPORT
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

//ROUTES
app.use('/user', user);
app.use('/recipes', recipeRouter);

//STARTING SERVER
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
