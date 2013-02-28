@ECHO OFF

REM Before you run this script, set ELF_USER and ELF_IP=YOUR_REMOTE_MACHINE (Elastic IP)
REM Set up a Linux Box
REM Set up two private keys
REM Copy three scripts

set User=%ELF_USER%
set SshUser=%User%@%ELF_IP%
set Home=/home/%User%
set CreateBin=CreateBin.sh
set SetupGitScript=SetupGit.sh
set SetupSshScript=SetupSsh.sh
set SetupNodeScript=SetupNode.sh

REM Create Bin
pscp %CreateBin% %SshUser%:%Home%/%CreateBin%
plink -t %SshUser% /bin/chmod +x %Home%/%CreateBin%
plink -t %SshUser% %Home%/%CreateBin%
plink -t %SshUser% /bin/rm %Home%/%CreateBin%

REM Copy Scripts
pscp %SetupSshScript% %SshUser%:%Home%/bin/%SetupSshScript%
pscp %SetupGitScript% %SshUser%:%Home%/bin/%SetupGitScript%
pscp %SetupNodeScript% %SshUser%:%Home%/bin/%SetupNodeScript%
plink -t %SshUser% /bin/chmod +x %Home%/bin/%SetupSshScript%
plink -t %SshUser% /bin/chmod +x %Home%/bin/%SetupGitScript%
plink -t %SshUser% /bin/chmod +x %Home%/bin/%SetupNodeScript%

REM Run Scripts 
plink -t %SshUser% %Home%/bin/%SetupNodeScript%
plink -t %SshUser% %Home%/bin/%SetupGitScript%