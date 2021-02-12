from flask import Flask, render_template, request, jsonify
from models import db, connect_db, LuckyInfo
from flask_cors import CORS

app = Flask(__name__)

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
    new_lucky = LuckyInfo(name='joyce', email='joyce@hotmail.com', year=1994, color='orange')

    db.session.add(new_lucky)
    db.session.commit()
    res_json = jsonify(new=new_lucky.serialize())
    return (res_json, 201)