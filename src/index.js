const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
// const conection = require('./config/databse');

app.set('port',process.env.PORT||3033);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'),()=>{
    console.log('server runing on localhost:'+ app.get('port'));    
});

require('./routes/routes')(app);