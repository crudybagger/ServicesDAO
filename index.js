let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');
let path = require('path');
require('dotenv').config();
let userRoute = require('./routes/user.route');
let serviceRoute = require('./routes/service.route');
let bookingRoute = require('./routes/booking.route');
let port = process.env.PORT || 4000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/users', userRoute);
app.use('/services', serviceRoute);
app.use('/bookings', bookingRoute);

app.listen(port, function(){
    console.log('Listening on port ' + port);
    }
);