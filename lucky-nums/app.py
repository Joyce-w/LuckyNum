from flask import Flask, render_template, request, jsonify
import requests
import random
from models import db, connect_db, LuckyInfo
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# specify that youre using postgres and a specific database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///lucky_num'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "luckynum888"

connect_db(app)
db.create_all()

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num", methods=["POST"])
def submit_data():

    # get json data from axios 
    name = request.get_json().get('name')
    year = request.get_json().get('year')
    email = request.get_json().get('email')
    color = request.get_json().get('color')

    # submit form data to db
    new_lucky = LuckyInfo(name=name, year=year, email=email, color=color)

    db.session.add(new_lucky)
    db.session.commit()


    # return post data in json
    res_json = jsonify(new=new_lucky.serialize())
    return (res_json, 201)

