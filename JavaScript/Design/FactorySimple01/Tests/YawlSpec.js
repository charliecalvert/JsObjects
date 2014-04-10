var Yawl = require("../Yawl").Yawl;

describe("A Yawl Suite", function() { 'use strict';

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("can create a yawl", function() {
    var yawl = new Yawl();
    expect(yawl).not.toBe(null);
  });

  it("shows a yawl can tack", function() {
    var yawl = new Yawl();
    expect(yawl.tack()).toBe('Yawl tack called.');
  });

  it("shows a yawl can luff", function() {
    var yawl = new Yawl();
    expect(yawl.luff()).toBe('Yawl luff called.');
  });

  it("shows a yawl can reach", function() {
    var yawl = new Yawl();
    expect(yawl.reach()).toBe('Yawl reach called.');
  });

  it("shows a Yawl can anchor", function() {
    var yawl = new Yawl();
    expect(yawl.anchor()).toBe('Yawl anchor called.');
  });

  it("shows a Yawl can dock", function() {
    var yawl = new Yawl();
    expect(yawl.dock()).toBe('Yawl dock called.');
  });



});