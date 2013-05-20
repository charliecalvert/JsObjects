REM This script will copy two open SSH private keys (PEM files) 
REM to a Linux box or other SSH server. You need to edit the 
REM the file to make it work right. Remove the brackets and
REM enter the value described below. You might also need to
REM change the path shown as \documents\Data\Putty. It should
REM lead to the directory where your private keys are stored.
REM On a Linux box, PPK files won't work. You want to copy
REM PEM files. You can convert PPK files to PEM files with
REM PuttyGen.

set SshUser=[PUT THE NAME OF YOUR PUTTY EC2 OR LINUX CONNECTION HERE]
set SshKey01=[PUT THE NAME OF PRIVATE KEY HERE]
set SshKey02=[PUT THE NAME OF ANOTHER PRIVATE KEY HERE]
REM KeyDir is where you copy your key from
set KeyDir=%USERPROFILE%\documents\Data\Putty\
REM RemoteDir is where you copy your key to
set RemoteDir=/home/ubuntu/

REM Copy Key 01
pscp %KeyDir%%SshKey01% %SshUser%:%RemoteDir%.ssh/.
plink -t %SshUser% /bin/chmod 400 %RemoteDir%.ssh/%SshKey01%

REM Copy Key 02
pscp %KeyDir%%SshKey02% %SshUser%:%RemoteDir%.ssh/.
plink -t %SshUser% /bin/chmod 400 %RemoteDir%.ssh/%SshKey02%

