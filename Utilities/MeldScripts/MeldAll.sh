#! /bin/bash

AWSBASIC="Aws Basic bin to JsObjects"
AWSBASIC_WRITING="AWS Basic bin to writing tech"
UNIT_TESTS="Unit Tests writings and dropbox"
JAVASCRIPT_WD="JavaScript writings and dropbox"

PS3='Please enter your choice: '
options=("Elvenware Root" "$AWSBASIC" "$AWSBASIC_WRITING" "$UNIT_TESTS" "$JAVASCRIPT_WD" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Elvenware Root")
            echo "Copy To"
            meld $HOME/Git/writings/Elvenware/ $HOME/Dropbox/Elvenware/WebSite/Root/
            ;;
        "$AWSBASIC")
            echo "Copy from"
            meld $HOME/bin/AwsBasic $JSOBJECTS/JavaScript/NodeCode/AwsBasicS3
            ;;
        "$AWSBASIC_WRITING")
            echo "$AWSBASIC_WRITING"
            meld $HOME/Git/writings/Tech/AwsS3/AwsS3.JsObj $JSOBJECTS/JavaScript/NodeCode/AwsBasicS3
            ;;
        "$UNIT_TESTS")
            echo "$UNIT_TESTS"
            meld $HOME/Git/writings/Elvenware/development/web/UnitTests $HOME/Dropbox/Elvenware/WebSite/UnitTests
            ;;
        "$JAVASCRIPT_WD")
            echo "$JAVASCRIPT_WD"
            meld $HOME/Git/writings/Elvenware/development/web/JavaScript $HOME/Dropbox/Elvenware/WebSite/JavaScript
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done



