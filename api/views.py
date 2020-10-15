from flask import Blueprint, jsonify, request
from . import db
from .models import Game
from .models import Console
#from .crawler.crawler.spiders.games import GamesSpider

main = Blueprint('main', __name__)

class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv

@main.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response

@main.route('/add_game', methods=['POST']) #entry point
def add_game():
    game_data = request.get_json()

    print("add_game[post] title = ", game_data['title'] ,"consoleId = ", game_data['consoleId'])
    #process data, TO DO: check valid console id
    new_game = Game(title=game_data['title'], consoleId=game_data['consoleId'], text="")
    #raise InvalidUsage('Test error message handling', status_code=410)
    db.session.add(new_game)
    db.session.commit()
    return 'Done', 201

@main.route('/update_game', methods=['POST']) #entry point
def update_game():
    game_data = request.get_json()
    print("update_game[post] id= ", game_data['id'], "title = ", game_data['title'] ,"consoleId = ", game_data['consoleId'], "text = ", game_data['text'])

    game_record = Game.query.filter_by(id=game_data['id']).first() #return a SQLAlchemy object
    game_record.title = game_data['title']
    game_record.text = game_data['text']

    db.session.commit()
    return 'Done', 201

@main.route('/delete_game', methods=['POST']) #entry point
def delete_game():
    game_data = request.get_json()
    print("delete_game[post] id= ", game_data['id'])

    game_record = Game.query.filter_by(id=game_data['id']).first() #return a SQLAlchemy object

    db.session.delete(game_record)
    db.session.commit()
    return 'Done', 201

#Returns a JSON object with element "games" which contains a list of all games
#specifc to the given consoleId
@main.route('/games/<consoleId>', methods=["GET"]) #entry point
def games(consoleId):

    gameId = request.args.get('id', type = int)
    print("games[get] id = ", gameId)
    print("games[get] consoleId = ", consoleId)

    game_list = Game.query.filter_by(consoleId=consoleId) #return a SQLAlchemy object
    games = []

    for game in game_list:
        games.append({'id' : game.id, 'title' : game.title, 'consoleId' : game.consoleId, 'consoleName' : game.console.name})

    return jsonify({'games' : games})

#ExampleURL: /games/snes?game=1. Used as a heavy read to return more information
@main.route('/game', methods=["GET"]) #entry point
def game():

    game_id = request.args.get('id', type = int)
    print("game[get] id = ", game_id)

    if game_id is not None:
        game_record = Game.query.filter_by(id=game_id).first() #return a SQLAlchemy object
        if game_record is not None:
            game_images = []

            for game_image in game_record.images: 
                game_images.append({'id' : game_image.id, 'path' : game_image.path})

            return jsonify({'game' : 
                                {'id' : game_record.id, 
                                'title' : game_record.title, 
                                'consoleId' : game_record.consoleId,
                                'consoleName' : game_record.console.name,
                                'text' : game_record.text,
                                'images' : game_images
                                }
                                })
        else:
            return jsonify({'game' : {}})
    else:
        return 'No game id specified', 404

@main.route('/games/<consoleId>/current-price', methods=["GET"]) #entry point
def currentPrice(consoleId):
    gameTitle = request.args.get('game', default = "", type = str)
    print("/games/<consoleId>/current-price gameTitle=", gameTitle)

    #GamesSpider.run()

    return jsonify({'price': 20.00})

#Returns a JSON object with element "console" which contains a list of all consoles in the system
@main.route('/consoles', methods=["GET"]) #entry point
def consoles():
    console_list = Console.query.filter_by(active=True) #return a SQLAlchemy object
    consoles = []

    #Saving code snippet in case I need to return all consoles and all games
    #for console in console_list:
    #    games = []
    #    for game in console.games: 
    #        games.append({'title' : game.title})
    #    consoles.append({'id' : console.id, 'name' : console.name, 'active': console.active, 'games': games})

    for console in console_list:
        consoles.append({'id' : console.id, 'name' : console.name, 'active': console.active})

    return jsonify({'consoles' : consoles})
