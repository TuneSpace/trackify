DROP TABLE IF EXISTS usertable
CASCADE;
DROP TABLE IF EXISTS favoritestable
CASCADE;

CREATE TABLE usertable
(
    id serial PRIMARY KEY,
    username varchar(50),
    passcode char(60),
    email varchar(100),
    avatar text
);

CREATE TABLE favoritestable
(
    user_id integer,
    track_id text,
    imageUrl VARCHAR(2000),
    track_name VARCHAR(1000),
    iPlayerId VARCHAR(1000),
    spotify_url varchar(2000),
    CONSTRAINT fk_user FOREIGN KEY (user_id)
    REFERENCES usertable (id)
);

INSERT INTO usertable
    (username, passcode, email, avatar)
VALUES
    ('Dr Dre', 'dre123', 'dre@gmail.com', 'this is my link');
INSERT INTO favoritestable
    (user_id, track_id, imageUrl, track_name, iPlayerId, spotify_url)
VALUES
    (1, '4WNcduiCmDNfmTEz7JvmLv', 'https://hips.hearstapps.com/hmg-prod/images/rihanna-attends-marvel-studios-black-panther-2-wakanda-news-photo-1666885496.jpg', 'A Rihhana Banger', '16epea6WNW5vPhusDbw3xp', 'https://open.spotify.com/album/3Zzv75PyROH6AMeXN1Yr1h');





