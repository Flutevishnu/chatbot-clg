import random
import json

import torch

from model import NeuralNet
from nltk_utils import bag_of_words, tokenize
from flask import g 
import sqlite3

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

FILE = "Trained_model.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "KLNCE"

def store_data(name="", email="", mobile_number=""):
    db = get_db()
    cursor = db.cursor()
    cursor.execute("INSERT INTO users (name, email, mobile_numer) VALUES (?, ?, ?)", (name, email, mobile_number))
    db.commit()

def get_response(msg):
     
    sentence = tokenize(msg)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.5:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                return random.choice(intent["responses"])
    else:
        return "I don't understand...."
    


Database = "chatbot.db"

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(Database)
    return db

def create_user_table():
    db = get_db()
    curser = db.curser()
    curser.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, monile_number number(10))")
    db.commit()
    


if __name__ == "__main__":
    print("Let's chat! (type 'quit' to exit)")
    while True:
        # sentence = "do you use credit cards?"
        sentence = input("You: ")
        if sentence == "quit":
            break

        response = get_response(sentence)
        print(response)