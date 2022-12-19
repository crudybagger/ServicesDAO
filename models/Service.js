//make a Service model schema
// Path: models\Service.js

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Define collection and schema for Service
let Service = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    image: {
        type: String
    }
}, {
    collection: 'services'
})

module.exports = mongoose.model('Service', Service);