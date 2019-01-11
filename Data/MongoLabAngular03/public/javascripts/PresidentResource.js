/**
 * Created by charlie on 4/29/2015.
 */

angular
    .module('pres', ['ngResource'])
    .factory('presidents', function($resource, mlabSettings) {
        console.log('Presidents factory called');

        return new Promise(function(resolve, reject) {
            mlabSettings.then(function(response) {
                var Presidents = $resource(response.url, response.apiKey, {
                    update: { method: 'PUT' }
                });

                Presidents.prototype.updateMe = function(
                    callback,
                    errorCallback
                ) {
                    console.log('update called');
                    return Presidents.update(
                        { id: this._id.$oid },
                        angular.extend({}, this, { _id: undefined }),
                        callback,
                        errorCallback
                    );
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

                Presidents.prototype.remove = function(cb, errorcb) {
                    return Presidents.remove(
                        { id: this._id.$oid },
                        cb,
                        errorcb
                    );
                };

                Presidents.prototype['delete'] = function(cb, errorcb) {
                    return this.remove(cb, errorcb);
                };

                resolve(Presidents);

                // return { a: 2 };
            });
        });
    });
