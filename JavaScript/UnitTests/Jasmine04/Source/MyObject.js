var MyObject = function (state) {
	'use strict';
    this._state = state;
};

MyObject.prototype.setState = function (state) {
	'use strict';
    this._state = state;
};

MyObject.prototype.addState = function (state) {
	'use strict';
    if (typeof this._state === "string") {
        this._state = [this._state, state];
    } else {
        this._state.push(state);
    }
};

MyObject.prototype.getState = function () {
	'use strict';
    return this._state;
};
