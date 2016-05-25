/**
 * Created by charlie on 5/8/16.
 */

var request = require('supertest');
var app = require('../app');

fdescribe('Elvenware Spec Routes Suite', function() {
    'use strict';

    it('shows we can test', function() {
        expect(true).toBe(true);
    });

    it('get the renewables route', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('renewables first object body', function(done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('shows we can get renewables objects by index', function(done) {
        request(app)
            .get('/renewablesByIndex/0')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables.Year).toBe('2017');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('shows we can get renewables objects by year', function(done) {
        request(app)
            .get('/renewablesByYear/2012')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                console.log(response.body);
                expect(response.body.renewables.Year).toBe('2012');
                expect(response.body.renewables['Solar (quadrillion Btu)']).toBe('0.227349746');
            })
            .end(function(err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

});
/*
    it('renewables', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) { throw err; }
                done();
            });
    });

    it('renewables first object text', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                //console.log(typeof response.text);
                var json = JSON.parse(response.text);
                //console.log(JSON.stringify(json, null, 4));
                expect(json.renewables[0].Year).toBe('2017');
            })
            .end(function (err, res) {
                if (err) { throw err; }
                done();
            });
    });

    it('renewables object body', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function (err, res) {
                if (err) { throw err; }
                done();
            });
    });

    it('renewables body first object only', function (done) {
        request(app)
            .get('/renewables/1')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables.Year).toBe('2016');
            })
            .end(function (err, res) {
                if (err) { throw err; }
                done();
            });
    });
});
*/
