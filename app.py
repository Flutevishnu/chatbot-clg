from flask import Flask,  render_template, request, jsonify
from chat import get_response
from flask import g 
import sqlite3



app = Flask(__name__)

Database = "Users.db"

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(Database)
    return db

def create_user_table():
    db = get_db()
    cursor = db.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, mobile NUMBER(10))")
    db.commit()
   
@app.before_first_request
def initialize_database():
    create_user_table()

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.get("/")
def home():
    return render_template("base.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

@app.post("/store")
def store():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    mobile = data.get("mobile")

    db = get_db()
    cursor = db.cursor()
    cursor.execute("INSERT INTO users (name, email, mobile) VALUES (?, ?, ?)", (name, email, mobile))
    db.commit()

    return jsonify({"status": "success"})



if __name__ == "__main__":
    app.run(debug=True)

