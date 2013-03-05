@ECHO OFF

REM Before you run this script, set ELF_USER and ELF_IP=YOUR_REMOTE_MACHINE (Elastic IP)
REM Set up a Linux Box
REM Set up two private keys
REM Copy three scripts

set User=%ELF_USER%
set SshUser=%User%@%ELF_IP%
set HomeDir=/home/%User%
set CreateBin=CreateBin.sh
set SetupGitScript=SetupGit.sh
set SetupSshScript=SetupSsh.sh
set SetupNodeScript=SetupNode.sh

REM Create Bin
pscp %CreateBin% %SshUser%:%HomeDir%/%CreateBin%
plink -t %SshUser% /bin/chmod +x %HomeDir%/%CreateBin%
plink -t %SshUser% %HomeDir%/%CreateBin%
plink -t %SshUser% /bin/rm %HomeDir%/%CreateBin%

REM Copy Scripts
pscp %SetupSshScript% %SshUser%:%HomeDir%/bin/%SetupSshScript%
pscp %SetupGitScript% %SshUser%:%HomeDir%/bin/%SetupGitScript%
pscp %SetupNodeScript% %SshUser%:%HomeDir%/bin/%SetupNodeScript%
plink -t %SshUser% /bin/chmod +x %HomeDir%/bin/%SetupSshScript%
plink -t %SshUser% /bin/chmod +x %HomeDir%/bin/%SetupGitScript%
plink -t %SshUser% /bin/chmod +x %HomeDir%/bin/%SetupNodeScript%

REM Run Scripts 
plink -t %SshUser% %HomeDir%/bin/%SetupNodeScript%
plink -t %SshUser% %HomeDir%/bin/%SetupGitScript%
