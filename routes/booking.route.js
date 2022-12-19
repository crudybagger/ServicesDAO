//make a booking route with crud operations

// Path: routes\booking.route.js

let express = require('express');
let app = express();
let bookingRoute = express.Router();

// Booking model
let Booking = require('../models/Booking');

// Add Booking
bookingRoute.route('/create').post((req, res, next) => {
    Booking.create(req.body, (error, data) => {
        if (error) {
        return next(error)
        } else {
        console.log(data)
        res.json(data)
        }
    })
    }
);

// Get All Bookings
bookingRoute.route('/').get((req, res) => {
    Booking.find((error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
    }
);

// Get single booking
bookingRoute.route('/read/:id').get((req, res) => {
    Booking.findById(req.params.id, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
    }
);

// Update booking
bookingRoute.route('/update/:id').put((req, res, next) => {
    Booking.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
        console.log(error)
        return next(error);
        } else {
        res.json(data)
        console.log('Booking successfully updated!')
        }
    })
    }
);

// Delete booking
bookingRoute.route('/delete/:id').delete((req, res, next) => {
    Booking.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
        return next(error);
        } else {
        res.status(200).json({
            msg: data
        })
        }
    })
    }
);

module.exports = bookingRoute;