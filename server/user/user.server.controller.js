'use strict';

// var User = require('../model/User.js'),
var User = require('./user.server.model').User;
var Boom = require('boom');
var request = require('request');

/** create function to create User. */
exports.create = function (req, res, next) {
    User.create(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(Boom.badImplementation(err)); // 500 error
        }
    });
};


/** getUser function to get User by id. */
exports.get = function (req, res, next) {
    User.get({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(Boom.badImplementation(err)); // 500 error
        }
    });
};
