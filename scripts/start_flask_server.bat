@ECHO OFF
ECHO Starting retro-collection back-end api...
cd "C:\work\retro-collection-native"
pipenv run flask run -h 192.168.0.134 -p 5000
PAUSE