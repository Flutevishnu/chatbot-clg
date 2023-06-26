from flask import Flask,  render_template, request, jsonify
from chat import get_response


app = Flask(__name__)

@app.get("/")
def home():
    return render_template("index.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    message = {"answer": response}
    console.log(message)
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True)