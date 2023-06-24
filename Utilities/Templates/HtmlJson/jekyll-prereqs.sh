#! /bin/bash

ELF_SCRIPTS=$HOME/Git/JsObjects/Utilities/Templates/Scripts
RED='\033[0;31m'
LIGHT_RED='\033[1;31m'
LIGHT_GREEN='\033[1;32m'
YELLOW='\033[1;33m'
BLUE='\033[1;36m'
NC='\033[0m' # No Color

if [ -f ${ELF_SCRIPTS}/Colors ]; then
    echo -e "${LIGHT_GREEN}Found ${ELF_SCRIPTS}/Colors${NC}"
    source ${ELF_SCRIPTS}/Colors
else
    BIGreen='\033[1;92m'        # Green
    Green='\033[0;32m'          # Green
    BIRed='\033[1;91m'
    echo -e "${BIRed}Did not find ${ELF_SCRIPTS}/Colors${Color_Off}"
    echo -e "${BIGreen}Exiting${Color_Off}"
    exit 1
fi

sudo apt-get install ruby-full build-essential zlib1g-dev

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
sudo gem install jekyll bundler

echo -e 'You should do this also:\n'${BIGreen}'source ~/.bashrc${Color_Off}'