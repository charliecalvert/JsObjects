REM @ECHO OFF

set User=%ELF_USER%
set SshUser=%User%@%ELF_IP%
set HomeDir=/home/%User%
set CreateBin=CreateBin.sh

REM Create Bin
pscp %CreateBin% %SshUser%:%HomeDir%/%CreateBin%