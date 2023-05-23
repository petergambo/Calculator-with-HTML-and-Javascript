from flask import Flask
from flask_mysqldb import MySQL
import MySQLdb.cursors


app = Flask(__name__)

app.secret_key = '12345678'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'adsnaira'

mysql = MySQL(app)
cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
cursor.execute('CREATE TABLE an_users1 (id INT NOT NULL PRIMARY KEY, uid VARCHAR(80), fName VARCHAR(40), lName VARCHAR(40), password VARCHAR(80), email VARCHAR(40), plan VARCHAR(10), date_registered DATETIME, last_login DATETIME, last_ip VARCHAR(40))')
mysql.connection.commit()

print('Success')

CREATE TABLE an_users1 (id INT NOT NULL PRIMARY KEY, uid VARCHAR(80), fName VARCHAR(40), lName VARCHAR(40), password VARCHAR(80), email VARCHAR(40), plan VARCHAR(10), date_registered DATETIME, last_login DATETIME, last_ip VARCHAR(40))

CREATE TABLE an_tasks (id INT NOT NULL PRIMARY KEY, tid VARCHAR(80), point VARCHAR(40), task_sponsor VARCHAR(40), purchase_point VARCHAR(80), view_count VARCHAR(40), action_url VARCHAR(10), date_added DATETIME, date_completed DATETIME, last_ip VARCHAR(40))
 