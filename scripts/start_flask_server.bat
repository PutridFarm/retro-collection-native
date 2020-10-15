@ECHO OFF
ECHO Starting retro-collection back-end api...
cd "C:\work\React\galactic-core\retro-collection\api"
pipenv run flask run -h 192.168.0.134 -p 5000
PAUSE