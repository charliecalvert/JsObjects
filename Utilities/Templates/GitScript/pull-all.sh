#! /bin/bash


shopt -s expand_aliases
source ~/.bash_aliases

alias

function title() {
	echo -e "\n==============="
	echo $1
	echo "==============="
}

check For directory and tell me if it doesn't exist else return 0	

function check-for-directory() {
	if [ ! -d $1 ]; then
		echo "Directory $1 does not exist"
		return 1
	else
		title $1
		cd $1 && pwd && git pull
		return 0
	fi	
}



function fall() {
	title isit320-calvert-2016
	i3c && git pull

	title prog270-calvert-2016
	p2c && git pull
	git pull
}

function spring() {
    title prog219-calvert-2016
    p9c && pwd && git pull

    title prog272-calvert-2016
    p2c && pwd && git pull
}

title gitio
gitio && pwd && git pull

title CloudNotes
cn && pwd && git pull

title JsObjects
jo && pwd && git pull

title Writing
wt && pwd && git pull

title ElfSite
elfsite && pwd && git pull

# title elven-assignments
# elfa && pwd && git pull

title elven-tools
elventools
pwd
git pull

fall
