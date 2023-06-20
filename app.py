from flask import Flask, render_template, request
import os
import random

app = Flask(__name__)

def random_image():
    """
    Return a random image from the ones in the static/ directory
    """
    img_dir = "./static"
    img_list = os.listdir(img_dir)
    return random.choice(img_list)

@app.route('/', methods=["GET", "POST"])
def index():   
   image = random_image()   
   return render_template('home.html', home_image = image)

######################################################
# consulting
######################################################
@app.route('/consulting_app', methods=["GET", "POST"])
def consulting_app():
   return render_template('consulting_app.html')

@app.route('/service_process', methods=["GET", "POST"])
def service_process():
   return render_template('service_process.html')

@app.route('/register', methods=["GET", "POST"])
def register():
   return render_template('registration.html')

@app.route('/login', methods=["GET", "POST"])
def login():
   return render_template('login.html')


if __name__ == '__main__':   
   #app.run(host="pmosoft.net", port=80, debug=True)
   app.run(host="localhost", port=5000, debug=True)
