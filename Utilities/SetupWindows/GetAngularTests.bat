call express Week05-AngularTest
cd Week05-AngularTest
call yo jasmine
copy %ELF_TEMPLATES%\.bowerrc .  /y
copy %ELF_TEMPLATES%\bower.json .  /y
copy %ELF_TEMPLATES%\AngularControl.js public\javascripts\control.js /y
copy %ELF_TEMPLATES%\AngularTestSpec.js test\spec\test.js /y
copy %ELF_TEMPLATES%\AngularTestIndex.html test\index.html /y
call bower install angular --save
call bower install angular-mocks --save
call bower install jquery --save
call bower install bootstrap --save
call npm install & bower install & npm start
