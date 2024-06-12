import os
from flask import Flask

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )


    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/')
    def hello():
        return 'Hello, World!'

    @app.route('/list', methods=['GET'])
    def listAll():
        listData = [{'id': 4, 'title': 'Fare test', 'state': 0}]

        return {'result': 'OK', 'content': listData }

    @app.route('/create', methods=['POST'])
    def createElement():
        return {'result': 'OK'}

    @app.route('/update', methods=['PATCH'])
    def updateElement():
        return {'result': 'OK'}

    @app.route('/delete', methods=['DELETE'])
    def deleteElement():
        return {'result': 'OK'}

    return app

if __name__ == 'main':
    app = create_app()
    app.run()
