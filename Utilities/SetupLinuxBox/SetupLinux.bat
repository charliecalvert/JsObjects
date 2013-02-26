@ECHO OFF
REM Set up a Linux Box
REM Set up two private keys
REM Copy three scripts
set SshUser=ubuntu@YOUR_ELASTICIP_HERE
set SshKey01=YOUR_PRIVATE_KEY_01
set SshKey02=YOUR_PRIVATE_KEY_02_IF_YOU_NEED_IT
set SetupGitScript=SetupGit.sh
set SetupSshScript=SetupSsh.sh
set SetupNodeScript=SetupNode.sh

REM Copy Key 01
pscp %USERPROFILE%\documents\Data\Putty\%SshKey01% %SshUser%:/home/ubuntu/.ssh/.
plink %SshUser% /bin/chmod 400 /home/ubuntu/.ssh/%SshKey01%

REM Copy Key 02
pscp %USERPROFILE%\documents\Data\Putty\%SshKey02% %SshUser%:/home/ubuntu/.ssh/.
plink %SshUser% /bin/chmod 400 /home/ubuntu/.ssh/%SshKey02%

REM Copy Scripts
pscp %SetupSshScript% %SshUser%:/home/ubuntu/bin/%SetupSshScript%
pscp %SetupGitScript% %SshUser%:/home/ubuntu/bin/%SetupGitScript%
pscp %SetupNodeScript% %SshUser%:/home/ubuntu/bin/%SetupNodeScript%
plink %SshUser% /bin/chmod +x /home/ubuntu/bin/%SetupSshScript%
plink %SshUser% /bin/chmod +x /home/ubuntu/bin/%SetupGitScript%
plink %SshUser% /bin/chmod +x /home/ubuntu/bin/%SetupNodeScript%

REM Run Scripts 
plink %SshUser% /home/ubuntu/bin/%SetupNodeScript%
plink %SshUser% /home/ubuntu/bin/%SetupScript%