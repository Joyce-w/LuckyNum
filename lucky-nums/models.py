from flask_sqlalchemy import SQLAlchemy

# initalize SQLA 
db = SQLAlchemy()

#connect app with SQLA instance
#call logic to connect to db from app.py, don't want to happen everytime models.py is ran
def connect_db(app):
    db.app = app
    db.init_app(app)

class LuckyInfo(db.Model):
    #special dunder method to determine table name
    __tablename__ = "luckyinfos"

    def __repr__(self):
        l=self
        return f"<LuckyInfo name={l.name}, email={l.email}, year={l.year}, color={l.color}>"

    #nullable = opposite of not null, SQLA default will be NULL 
    name = db.Column(db.String(50),
                    primary_key=True)

    
    email = db.Column(db.String(30),
                    nullable=False)
    
    year = db.Column(db.Integer(),
                    nullable=False)

    color = db.Column(db.String(6),
                    nullable=False)

    def serialize(self):
        """returns dict representation of lucky info into JSON"""
        return {
            "name": self.name,
            "email": self.email,
            "year": self.year,
            "color": self.color
        }