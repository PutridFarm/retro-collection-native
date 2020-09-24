from . import db

class GameImage(db.Model):
    __tablename__ = 'gameimage' #SQL-Alchemy will convert the camelCase class name to underscore for table name. This explicitly sets the table name
    id = db.Column(db.Integer, primary_key=True)
    gameId = db.Column(db.Integer, db.ForeignKey('game.id'))
    path = db.Column(db.String(50), nullable=True)

class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=True)
    consoleId = db.Column(db.String(50), db.ForeignKey('console.id'))
    text = db.Column(db.Text, nullable=False, default="")
    images = db.relationship(GameImage, backref='game', lazy=True)

class Console(db.Model):
    id = db.Column(db.String(50), primary_key=True)
    name = db.Column(db.String(50), nullable=True)
    active = db.Column(db.Boolean)
    games = db.relationship(Game, backref='console', lazy=True)


