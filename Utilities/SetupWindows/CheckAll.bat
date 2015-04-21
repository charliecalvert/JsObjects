set BAR=c:\temp\bar.txt
cls

cd JsObjects 
echo **** JsObjects **** > %BAR%
git status >> %BAR%

cd ..\writings
echo **** Writing **** >> %BAR%
git status  >> %BAR%

cd ..\CloudNotes
echo **** CloudNotes **** >> %BAR%
git status  >> %BAR%

cd ..\charliecalvert.github.io
echo **** charliecalvert.github.io **** >> %BAR%
git status >> %BAR%

cd ..\elfsite
echo **** elfsite **** >> %BAR%
git status >> %BAR%

cd ..\prog272-calvert
echo **** prog272-calvert **** >> %BAR%
git status >> %BAR%
cd ..

type %BAR%
