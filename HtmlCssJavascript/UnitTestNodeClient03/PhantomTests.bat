set PATH=%PATH%;G:\Src\phantomjs-1.9.0-windows\
set TEST=http://localhost:30025/

rem start %TEST%
phantomjs Public\run-qunit.js %TEST%