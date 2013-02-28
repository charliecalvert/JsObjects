@ECHO OFF

REM For help, see the usage section below

if [%1]==[] goto usage
if "%ELF_USER%"=="" goto usage
if "%ELF_IP%"=="" goto usage
if NOT EXIST "PublicKey.txt" goto usage

set User=%ELF_USER%
set SshUser=%User%@%ELF_IP%
set Home=/home/%User%
set Password=%1
set CreateSsh=CreateSshDir.sh
set AuthorizedKeys=%Home%/.ssh/authorized_keys

REM Create SshDir
pscp -pw %Password% %CreateSsh% %SshUser%:%Home%/%CreateSsh%
plink -pw %Password% %SshUser% /bin/chmod +x %Home%/%CreateSsh%
plink -pw %Password% %SshUser% %Home%/%CreateSsh%
plink -pw %Password% %SshUser% /bin/rm %Home%/%CreateSsh%
pscp -pw %Password% PublicKey.txt %SshUser%:/%AuthorizedKeys%
plink -pw %Password% %SshUser% /bin/chmod 400 %AuthorizedKeys%
goto :eof

:usage
ECHO ====== Create SSH Dir ======
ECHO ============================
ECHO This script expects your server's password as a parameter
ECHO ----------------------------
ECHO Example:
ECHO   CreateSshDir.bat MyPassword
ECHO ----------------------------
ECHO Before you run this script, set ELF_USER and ELF_IP
ECHO Your ELF_IP might be your elastic ip if you are using 
ECHO EC2. You can set ELF_USER and ELF_IP by using
ECHO the ENVIRONMENT VARIABLES dialog. Alternatively
ECHO you can set them at the command prompt like this:
ECHO   set ELF_USER=MyUserName
ECHO   set ELF_IP=MyRemoteIp
ECHO For instance:
ECHO   set ELF_USER=charlie
ECHO   set ELF_IP=192.168.2.3
ECHO ----------------------------
ECHO You should also create a file called PublicKey.txt
ECHO That contains your public key. This script will 
ECHO use the file to create an authorized keys
ECHO file on the server. The key should be all on one
ECHO line and the line should end with a UNIX style LF.
ECHO ============================