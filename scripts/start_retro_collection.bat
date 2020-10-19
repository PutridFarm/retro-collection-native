@ECHO OFF

ECHO Starting retro-collection...
cd "C:\work\retro-collection-native"
start cmd.exe /k "expo start"

ECHO Starting retro-collection back-end api...
start cmd.exe /k "pipenv run flask run -h 192.168.0.134 -p 5000"

ECHO Starting Samsung Galaxy S7 Android Emulator...
cd "C:\Users\Mike\AppData\Local\Android\Sdk\emulator"
emulator -avd "Samsung_Galaxy_S7_Mike_s_Phone_API_26"

PAUSE

