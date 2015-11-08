describe('Get Nine Test Suite', function() {

  // insert an HTML fixture into the DOM
  beforeEach(function() {
    var fixture = 
      '<div id="fixture">' +
        '<input id="nine" type="text">' + 
      '<div>';

    document.body.insertAdjacentHTML('afterbegin',  fixture);
  });

  // remove the HTML fixture
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('should get nine', function() {
    document.getElementById('nine').value = 9;
    expect(getNine()).toBe(9);
  });

});
