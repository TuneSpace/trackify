DROP DATABASE IF EXISTS trackify;

CREATE DATABASE trackify;

DROP TABLE IF EXISTS usertable CASCADE;
DROP TABLE IF EXISTS favoritestable CASCADE;

CREATE TABLE usertable (
    id serial PRIMARY KEY,
    username varchar(50),
    passcode char(60),
    email varchar(100),
    avatar text
);

CREATE TABLE favoritestable (
    user_id integer,
    track_id text,
    CONSTRAINT fk_user FOREIGN KEY (user_id) 
    REFERENCES usertable (id)
);

INSERT INTO usertable (username, passcode, email, avatar) VALUES ('Dr Dre', 'dre123', 'dre@gmail.com', 'this is my link');
INSERT INTO favoritestable (user_id, track_id) VALUES (1, '23');





