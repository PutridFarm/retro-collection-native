CREATE TABLE GameImage (
    id int NOT NULL,
    gameId int,
    path varchar(50) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (gameId) REFERENCES Game(gameId)
);