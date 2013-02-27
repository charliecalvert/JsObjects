@ECHO OFF
REM Set up a Linux Box
REM Set up two private keys
REM Copy three scripts
set SshUser=ubuntu@YOUR IP OR URL HERE
set CreateBin=CreateBin.sh
set SetupGitScript=SetupGit.sh
set SetupSshScript=SetupSsh.sh
set SetupNodeScript=SetupNode.sh

REM Create Bin
pscp %CreateBin% %SshUser%:/home/ubuntu/%CreateBin%
plink %SshUser% /bin/chmod +x /home/ubuntu/%CreateBin%
plink %SshUser% /home/ubuntu/%CreateBin%
plink %SshUser% /bin/rm /home/ubuntu/%CreateBin%

REM Copy Scripts
pscp %SetupSshScript% %SshUser%:/home/ubuntu/bin/%SetupSshScript%
pscp %SetupGitScript% %SshUser%:/home/ubuntu/bin/%SetupGitScript%
pscp %SetupNodeScript% %SshUser%:/home/ubuntu/bin/%SetupNodeScript%
plink %SshUser% /bin/chmod +x /home/ubuntu/bin/%SetupSshScript%
plink %SshUser% /bin/chmod +x /home/ubuntu/bin/%SetupGitScript%
plink %SshUser% /bin/chmod +x /home/ubuntu/bin/%SetupNodeScript%

REM Run Scripts 
plink %SshUser% /home/ubuntu/bin/%SetupNodeScript%
plink %SshUser% /home/ubuntu/bin/%SetupGitScript%