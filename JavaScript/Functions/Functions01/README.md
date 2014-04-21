Function Basics
===============

There are a lot of very funky things about JavaScript **functions**.
Trying to memorize them can be hard, but this app is designed to show
off at least a few peculariaties. 

- [RunMe.js](RunMe.js)
- [BasicFunction.js](BasicFunction.js)
- [BasicScope.js](BasicScope.js)

The output looks like this:

	=======================
	>> basicFunction
	=======================
	variable00: variable00
	func01.name: 
	type of func01.name: string
	func02.name: func02
	type of func02.name: string
	=======================
	>> basicScope
	=======================
	>> Call func01 <<
	func01.name: func01
	func01.publicValue01: undefined
	func01.publicValue02: undefined
	func01.privateValue: undefined
	[func01 writeThis called]
	that in writeThis:  undefined
	this in writeThis:  undefined

	>> Call func02 <<

	func02.name: undefined
	func02.publicValue01: 1
	func02.publicValue02: 2
	func02.privateValue: undefined
	[Func02 writeThis called]
	that in writeThis:  { publicValue02: 2, publicValue03: 3 }
	this in writeThis:  { publicValue02: 2, publicValue03: 3 }
	[Func02 writeThat called]
	that in writeThat:  { publicValue02: 2, publicValue03: 3 }
	this in writeThat:  undefined
	Try commenting out **use strict** in **func01** and see what happens
	Bottom line? Avoid using *this*!
	== End =====

