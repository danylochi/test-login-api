import flask
from flask import request, jsonify
from flask_cors import CORS

app = flask.Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config["DEBUG"] = True

user = {
    "id": 1,
    "name": "Dayane",
    "email": "dayane@dayane.com"

}

@app.route('/api/login', methods=['POST'])
def login():
    content = request.json
    print(content)
    return jsonify(user)

app.run()

