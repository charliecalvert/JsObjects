REM Copy Key 01
pscp %USERPROFILE%\documents\Data\Putty\%SshKey01% %SshUser%:/home/ubuntu/.ssh/.
plink %SshUser% /bin/chmod 400 /home/ubuntu/.ssh/%SshKey01%

REM Copy Key 02
pscp %USERPROFILE%\documents\Data\Putty\%SshKey02% %SshUser%:/home/ubuntu/.ssh/.
plink %SshUser% /bin/chmod 400 /home/ubuntu/.ssh/%SshKey02%
