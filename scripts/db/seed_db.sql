INSERT INTO Console (id, name, active)
VALUES ('snes', 'SNES' true);

INSERT INTO Console (id, name, active)
VALUES ('nes', 'NES', true);

INSERT INTO Console (id, name, active)
VALUES ('n64', 'N64', true);

INSERT INTO Console (id, name, active)
VALUES ('sega', 'Sega Genesis', false);

INSERT INTO Game (id, title, consoleId, text)
VALUES (1, 'Secret of Mana', 'snes', 'Secret of Mana is an Action RPG developed and published by Square in 1993.');

INSERT INTO GameImage (id, gameId, path)
VALUES (1, 1, '/images/game_image/1/Secret_of_Mana_Box.jpg');