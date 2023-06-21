#! /bin/bash

ELF_SCRIPTS=$HOME/Git/JsObjects/Utilities/Templates/Scripts

if [ -f ${ELF_SCRIPTS}/Colors.sh ]; then
    . ${ELF_SCRIPTS}/Colors.sh
fi

sudo apt-get install ruby-full build-essential zlib1g-dev

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
# source ~/.bashrc

echo -e 'You should do this also:\n${BIGreen}source ~/.bashrc${Color_Off}'