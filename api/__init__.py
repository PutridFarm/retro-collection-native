from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'FALSE'
    #app.config['SERVER_NAME'] = '192.168.0.134:5000'

    db.init_app(app)

    from .views import main

    app.register_blueprint(main)
    
    return app
