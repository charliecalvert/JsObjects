function bar1(a) {
 console.log(a);
}
 
var bar = a => console.log(a);
 
//bar('foo');
 
var bar2 = a => b => {
	console.log('here');
	console.log(typeof a);
	a(b);
}

console.log('calling bar2');
const c = bar2(bar);
c('goobar');
