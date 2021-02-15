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

    # get random int/fact from API
    rand_num = ran_num()
    resp_num = requests.get(f"http://numbersapi.com/{rand_num}")
    ran_num_fact = resp_num.text

    
    # get year fact from API
    resp_year = requests.get(f"http://numbersapi.com/{year}/year")
    birth_yr_fact = resp_year.text

    # compile info to return to response data 
    info = {
        "num": {
            "fact": ran_num_fact,
            "num": rand_num
        },
        "year": {
            "fact": birth_yr_fact,
            "year": year
        }
    }

    info = jsonify(info)

    # return new info data to response.data
    return info

# gen random number for API 
def ran_num():
    return random.randint(1,100)