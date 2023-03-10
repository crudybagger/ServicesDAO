//make a user route with crud operations

// Path: routes\user.route.js

let express = require('express');
let app = express();
let userRoute = express.Router();

// User model
let User = require('../models/User');

// Add User
userRoute.route('/create').post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
        return next(error)
        } else {
        console.log(data)
        res.json(data)
        }
    })
    }
);

// Get All Users
userRoute.route('/').get((req, res) => {
    User.find((error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
    }
);

// Get single user
userRoute.route('/read/:id').get((req, res) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
    }
);

// Update user
userRoute.route('/update/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
        console.log(error)
        return next(error);
        } else {
        res.json(data)
        console.log('User successfully updated!')
        }
    })
    }
);

// Delete user
userRoute.route('/delete/:id').delete((req, res, next) => {
    User.findOneAndRemove(req.params.id, (error, data) => {
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

module.exports = userRoute;