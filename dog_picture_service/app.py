from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    url = "https://placedog.net/640/480?random"
    return url

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='3001')
