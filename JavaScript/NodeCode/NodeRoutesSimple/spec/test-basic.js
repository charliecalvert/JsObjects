/**
 * Created by charlie on 10/7/15.
 */

var request = require('supertest');
var app = require('../app');

describe('Elvenware Simple Plain Suite', function() {

    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });


    it('expects route /getOnea not to exist', function(done) {
        // console.log("Expect:", request(app).get('/').expect(1, done));
        request(app)
            .get('/getOnea')
            .expect('Content-Type', /html/)
            .expect(404)
            .end(function(err, res) {
                if (err) throw err;
                done();
            });
    });

    it('getFeetInMile', function(done) {
        request(app)
            .get('/getFeetInMile')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                done();
            });
    });

    it('calculateFeet', function(done) {
        request(app)
            .get('/calculateFeetFromMiles')
            .query({miles: 2})
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                done();
            });
    });

    it('calculateCircumference', function(done) {
        request(app)
            .get('/calculateCircumference')
            .query({radius: 3})
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                done();
            });
    });

});
