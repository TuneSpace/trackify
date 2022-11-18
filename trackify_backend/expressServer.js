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

app.get('/user/:id', (req, res) => {
    const user_id = req.params.id
    console.log(user_id)
    client.query(`SELECT * FROM favoritestable WHERE user_id='${user_id}'`)

    .then(result => {
        res.status(200)
        res.send(result.rows)
    })
})

// Get all user info only if password compare is true
app.get('/user/info', (req, res) => {
    const email = req.body.email;
    let inputPassword = req.body.passcode
    let dbPassword;
    client.query(`SELECT passcode FROM usertable WHERE email='${email}'`, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            dbPassword = result.rows[0].passcode;
            // console.log('This is the user input pass -->', typeof inputPassword, inputPassword);
            // console.log('This is the DB pass -->', typeof dbPassword, dbPassword);
            bcrypt.compare(inputPassword, dbPassword, (err, result) => {
                if(err) {
                    console.log('bcrpyt error: ', err);
                    res.status(500).send('Bcrypt Error: Database/Hash error');
                } else if (result) {
                    // console.log(result)
                    client.query(`SELECT * FROM usertable WHERE email='${email}'`)
                    .then((user) => {
                        res.status(200).send(user.rows);
                    })
                } else {
                    // console.log(result);
                    res.status(400).send('Input Error: Input password does not match');
                }
            })

        }

    })
            
       
})



//Post to user table
app.post('/user', (req, res) => {
    const { passcode } = req.body;
    const { username } = req.body;
    const { avatar } = req.body;
    const { email } = req.body;
    
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
    console.log("this is the request body -->", req.body);
    
    try {
        const newFavUserId  = req.body.user_id;
        const newFavTrackId = req.body.track_id;
        const newFavTrackImage = req.body.imageUrl;
        const newFavTrackName = req.body.track_name;
        const newFavTrackiPlayerId = req.body.iPlayerId;
        const newFavTrackSpotify = req.body.spotify_url;
        client.query(`INSERT INTO favoritestable (user_id, track_id, imageUrl, track_name, iPlayerId, spotify_url ) VALUES ('${newFavUserId}', '${newFavTrackId}', '${newFavTrackImage}', '${newFavTrackName}', '${newFavTrackiPlayerId}' , '${newFavTrackSpotify}')`)
        .then(res.status(201).send('Track Added'))
    } catch (error) {
        console.log('error: ', error);
    }
});

//add login verification route

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})