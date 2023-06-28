from flask import Flask,  render_template, request, jsonify
from chat import get_response, store_data



app = Flask(__name__)

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
    mobile_number = data.get("mobile_number")

    store_data(name, email, mobile_number)

    return jsonify({"status" : "success"})


if __name__ == "__main__":
    app.run(debug=True)

