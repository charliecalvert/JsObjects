#! /bin/bash

TEMPLATE_DIR="$HOME/Documents/Aptana Rubles/js.ruble/templates"
JSOBJECTS_RUBLE_DIR=$JSOBJECTS/Utilities/EclipseTools/JsRubleTemplates

copyFrom ()
{
	if [ ! -d "$JSOBJECTS_RUBLE_DIR" ]; then
		/bin/mkdir $JSOBJECTS_RUBLE_DIR
	fi

	cp "$TEMPLATE_DIR"/* $JSOBJECTS_RUBLE_DIR/.
}

copyTo ()
{
	cp $JSOBJECTS_RUBLE_DIR/* "$TEMPLATE_DIR"/*
}

PS3='Please enter your choice: '
options=("Copy to Ruble" "Copy from Ruble" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Copy to Ruble")
            echo "Copy To"
            copyTo
            ;;
        "Copy from Ruble")
            echo "Copy from"
            copyFrom
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done

