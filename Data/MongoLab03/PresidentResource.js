/**
 * Created by charlie on 4/29/2015.
 */

angular.module('pres', ['ngResource'])
    .constant('CONFIG', {
        DB_NAME: 'elvenlab01',
        COLLECTION: 'Foo',
        API_KEY: 'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy'
    })
    .factory('presidents', function($resource, CONFIG) {
        console.log('Presidents factory called');
        var Presidents = $resource(
            'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
            '/collections/' + CONFIG.COLLECTION + '/:id', {
                apiKey: CONFIG.API_KEY
            },
            {
                update: {method:'PUT'}
            });

        Presidents.prototype.updateMe = function (callback, errorCallback) {
            console.log("update called");
            return Presidents.update(
                {id:this._id.$oid},
                angular.extend({}, this, {_id:undefined}),
                callback,
                errorCallback);
        };

        Presidents.prototype.getPresidentName = function() {
            return this.presidentName;
        };

        Presidents.prototype.getTermStart = function() {
            return this.termStart;
        };

        Presidents.prototype.getTermEnd = function() {
            return this.termEnd;
        };

        Presidents.prototype.remove = function (cb, errorcb) {
            return Presidents.remove({id:this._id.$oid}, cb, errorcb);
        };

        Presidents.prototype['delete'] = function (cb, errorcb) {
            return this.remove(cb, errorcb);
        };

        return Presidents;

        // return { a: 2 };
    });
