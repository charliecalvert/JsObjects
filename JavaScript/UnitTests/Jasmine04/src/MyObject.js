var MyObject = function (state) {
    this._state = state;
}
MyObject.prototype.setState = function (state) {
    this._state = state;
};
MyObject.prototype.addState = function (state) {
    if (typeof this._state === "string") {
        this._state = [this._state, state];
    } else {
        this._state.push(state);
    }
};
MyObject.prototype.getState = function () {
    return this._state;
}
