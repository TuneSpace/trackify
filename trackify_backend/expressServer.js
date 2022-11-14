const express = require('express')
const app = express()
const { Client } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');
const config = require('./config.json')[process.env.NODE_ENV || "dev"];
const PORT = config.server;
app.use(express.json());
app.use(cors());

const client = new Client({
    connectionString: config.connectionString
});

client.connect();

//Get all favorited tracks by user id
app.get('/user/tracks', (req, res) => {
    const {user_id} = req.body
    client.query(`SELECT * FROM favoritestable WHERE user_id=${Number(user_id)}`)
    .then(result => {
        res.status(200)
        res.send(result.rows)
    })
})

// Get all user info
// app.get('/user')



//Post to user table
app.post('/user', (req, res) => {
    const { passcode } = req.body;
    const { username } = req.body;
    const { avatar } = req.body;
    const { email } = req.body;
    console.log(passcode)
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(passcode, salt, function(err, hash) {
        client.query(`INSERT INTO usertable (username, passcode, email, avatar) VALUES ('${username}', '${hash}', '${email}', '${avatar}')`)
        .then(() => res.status(201).send('Created Password'))
        .catch((error) => console.log(error))
    });
    });  
})

//post tracks to favoritestable 
app.post('/user/tracks', (req, res) => {
    try {
        const newFavUserId  = req.body.user_id;
        const newFavTrackId = req.body.track_id;
        client.query(`INSERT INTO favoritestable (user_id, track_id) VALUES ('${newFavUserId}', '${newFavTrackId}')`)
        .then(res.send(() => res.statusCode(200)))
    } catch (error) {
        res.status(500)
        res.send(error)
    }
});

//add login verification route

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})