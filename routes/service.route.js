//make a service route with crud operations

// Path: routes\service.route.js

let express = require('express');
let app = express();
let serviceRoute = express.Router();

// Service model
let Service = require('../models/Service.js');

// Add Service
serviceRoute.route('/create').post((req, res, next) => {
    Service.create(req.body, (error, data) => {
        if (error) {
        return next(error)
        } else {
        console.log(data)
        res.json(data)
        }
    })
    }
);

// Get All Services
serviceRoute.route('/').get((req, res) => {
    Service.find((error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
    }
);

// Get single service
serviceRoute.route('/read/:id').get((req, res) => {
    Service.findById(req.params.id, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
    }
);

// Update service
serviceRoute.route('/update/:id').put((req, res, next) => {
    Service.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
        console.log(error)
        return next(error);
        } else {
        res.json(data)
        console.log('Service successfully updated!')
        }
    }
    )
    }
);

// Delete service
serviceRoute.route('/delete/:id').delete((req, res, next) => {
    Service.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
        return next(error);
        } else {
        res.status(200).json({
            msg: data
        })
        }
    }
    )
    }
);

module.exports = serviceRoute;