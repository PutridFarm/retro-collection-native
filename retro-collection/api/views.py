from flask import Blueprint, jsonify, request
from . import db
from .models import Game

main = Blueprint('main', __name__)

@main.route('/add_game', methods=['POST']) #entry point
def add_game():
    game_data = request.get_json()

    print("games[post] title = ", game_data['title'] ,"consoleId = ", game_data['consoleId'])
    #process data, check valid console id
    new_game = Game(title=game_data['title'], consoleId=game_data['consoleId'].upper(), text=game_data['text'])

    db.session.add(new_game)
    db.session.commit()
    return 'Done', 201

@main.route('/games/<consoleId>', methods=["GET"]) #entry point
def games(consoleId):

    print("games[get] consoleId = ", consoleId.upper())
    game_list = Game.query.filter_by(consoleId=consoleId.upper()) #return a SQLAlchemy object
    games = []

    for game in game_list:
        games.append({'id' : game.id, 'title' : game.title, 'consoleId' : game.consoleId, 'text' : game.text})

    return jsonify({'games' : games})

#ExampleURL: /games/snes?game=1. Used as a heavy read to return more information
@main.route('/games/<consoleId>?game=<gameId>', methods=["GET"]) #entry point
def game(gameId):

    print("games[get] gameId = ", gameId.upper())
    game_record = Game.query.filter_by(id=gameId).first() #return a SQLAlchemy object
    game = {'id' : game_record.id, 'title' : game_record.title, 'consoleId' : game_record.consoleId, 'text' : game_record.text}

    return jsonify({'game' : game})
