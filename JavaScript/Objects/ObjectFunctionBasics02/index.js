/**
 * @author Charlie
 */

function hello(func) {
    const test02 = document.getElementById('test02');
    test02.textContent = "It works!";
    func();
}

window.onload = () => {
  "use strict";
  
  const test01 = document.getElementById('test01');
  test01.textContent = "Document Read called";
  
  hello(function() {
      const test03 = document.getElementById('test03');
      test03.textContent = "It's a nine!";
  });
  
};