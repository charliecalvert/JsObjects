set User=%ELF_USER%
set SshUser=%User%@%ELF_IP%
set SshKey01=%ELF_PRIVATE_KEY_NAME%
set GitSshScript=SetupSshAgent.sh

REM Copy Key 01
pscp %ELF_PRIVATE_KEY_DIR%\%SshKey01% %SshUser%:/home/%User%/.ssh/.
plink %SshUser% /bin/chmod 400 /home/%User%/.ssh/%SshKey01%

REM Copy Script that pulls from Repository
pscp %GitSshScript% %SshUser%:/home/%User%/bin/.
plink %SshUser% /bin/chmod 700 /home/%User%/bin/%GitSshScript%
plink %SshUser% /home/%User%/bin/%GitSshScript%


