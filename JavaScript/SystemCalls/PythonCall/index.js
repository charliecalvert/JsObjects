// var python = require('node-python');

var PythonShell = require('python-shell');


//var mh = python.import('./MakeHeadings');
//mh.foo()

PythonShell.run('./MakeHeadings.py', function (err) {
  if (err) throw err;
  console.log('finished');
});

var pyshell = new PythonShell('MakeHeadings.py');

// sends a message to the Python script via stdin 
// pyshell.send('hello');
 
pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement) 
  console.log(message);
});
 
// end the input stream and allow the process to exit 
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});

var options = {
  mode: 'text',
  // pythonPath: 'path/to/python',
  // pythonOptions: ['-u'],
  scriptPath: 'MakeHeaders',
  args: ['value1', 'value2', 'value3']
};
 
PythonShell.run('my_script.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution 
  console.log('results: %j', results);
});
