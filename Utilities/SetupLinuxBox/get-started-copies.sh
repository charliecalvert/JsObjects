#! /bin/bash

scp ${ELF_UTILS}/SetupLinuxBox/GetStarted aws-spot:/home/ubuntu/.
scp ${ELF_TEMPLATES}/GitScript/big-git-install-2023-05-08.sh aws-spot:/home/ubuntu/.
scp /mnt/g/Shared/AwsConfigAll.zip aws-spot:/home/ubuntu/.ssh/.
ln -s ~/Git/JsObjects/Utilities/SetupLinuxBox/.my_bash_aliases ~/.my_bash_aliases

