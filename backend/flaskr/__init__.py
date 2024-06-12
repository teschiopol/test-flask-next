import os
from flask import Flask
from flask_cors import CORS

prefix = '/api/todo/'
todos = []

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route(prefix, methods=['GET'])
    def listAll():
        return {'result': 'OK', 'content': todos }

    @app.route(prefix, methods=['POST', 'OPTIONS'])
    def createElement():
        return {'result': 'OK'}

    @app.route(prefix + '<int:id>', methods=['PATCH'])
    def updateElement(id):
        return {'result': 'OK'}

    @app.route(prefix + '<int:id>', methods=['DELETE'])
    def deleteElement(id):
        return {'result': 'OK'}

    return app

if __name__ == 'main':
    app = create_app()
    app.run()
