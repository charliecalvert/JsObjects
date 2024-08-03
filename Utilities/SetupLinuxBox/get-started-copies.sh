#! /bin/bash

AWS=aws2403

GIT_HOME=$HOME/Git
JSOBJECTS=$GIT_HOME/JsObjects
ELF_UTILS=$JSOBJECTS/Utilities
ELF_TEMPLATES=$ELF_UTILS/Templates
ELF_SCRIPTS=$ELF_TEMPLATES/Scripts
SETUP_LINUXBOX=$ELF_UTILS/SetupLinuxBox
JEKYLL_PREREQS=${ELF_TEMPLATES}/HtmlJson/jekyll-prereqs.sh

if [ -f ${ELF_SCRIPTS}/Colors.sh ]; then
    . ${ELF_SCRIPTS}/Colors.sh
fi

scp ${SETUP_LINUXBOX}/GetStarted ${AWS}:/home/ubuntu/.
scp ${ELF_TEMPLATES}/GitScript/big-git-install-2023-05-08.sh ${AWS}:/home/ubuntu/.
scp /mnt/g/Shared/AwsConfigAll.zip ${AWS}:/home/ubuntu/.ssh/.
# ssh ${AWS} "ln -s ${SETUP_LINUXBOX}/.my_bash_aliases ~/.my_bash_aliases"

# if [ -f ${JEKYLL_PREREQS} ]; then
#    ./${JEKYLL_PREREQS}
# fi
