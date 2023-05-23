
from flask import Flask, make_response, request, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    if request.values.get('u'):
        resp = make_response(render_template('index.html'))
        resp.set_cookie('rfl', request.values.get('u'), 8640000 )  
        return resp
    else:
        return render_template('index.html')



if __name__ == "__main__":
    app.run(debug=True)