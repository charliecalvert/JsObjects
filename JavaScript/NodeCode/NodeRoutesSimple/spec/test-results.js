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


    it('getFeetInMileResult', function(done) {
        request(app)
            .get('/getFeetInMile')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                expect(res.body.result).toBe(5280);
                done();
            });
    });

    it('calculateFeetResult', function(done) {
        request(app)
            .get('/calculateFeetFromMiles')
            .query({miles: 2})
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                expect(res.body.result).toBe(10560);
                done();
            });
    });

    it('calculateCircumferenceResult', function(done) {
        request(app)
            .get('/calculateCircumference')
            .query({radius: 5})
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if(err) throw err;
                expect(res.body.result).toBeCloseTo(31.41592);
                done();
            });
    });

});
