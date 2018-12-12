const express          = require("express");
const router           = express.Router();
const mongoose         = require("mongoose");
const multer           = require('multer');

// const Charity = require('../models/charityModel');

const api = require('../controllers/charityApi');

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./Images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname + '.jpeg');
    }
});


var upload = multer({
    storage: Storage
});

// Routes 
router.get('/allcharities', api.allcharities);
router.post('/addcharity', (upload.single('charitylogo')), api.addcharity);
router.get('/:id', api.charity_id);

module.exports = router;