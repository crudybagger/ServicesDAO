//make a booking schema
// Path: models\Booking.js

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define collection and schema for Booking
let Booking = new Schema({
    user: {
        type: String
    },
    service: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    status: {
        type: String
    }
}, {
    collection: 'bookings'
});

module.exports = mongoose.model('Booking', Booking);