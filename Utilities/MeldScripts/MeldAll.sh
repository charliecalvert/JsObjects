#! /bin/bash

AWSBASIC="Aws Basic bin to JsObjects"
AWSBASIC_WRITING="AWS Basic JsObject to Writing Tech"
AWSBASIC_TECH_BIN="AWS Writing Tech to AWS BASIC Bin"
UNIT_TESTS="Unit Tests writings and dropbox"
JAVASCRIPT_WD="JavaScript writings and dropbox"
DATABASE="Database writings and dropbox"

PS3='Please enter your choice: '
options=("Elvenware Root" "$AWSBASIC" "$AWSBASIC_WRITING" "$AWSBASIC_TECH_BIN" "$UNIT_TESTS" "$JAVASCRIPT_WD" "$DATABASE" "Quit")
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
        "$AWSBASIC_TECH_BIN")
            echo "Copy from"
            meld $HOME/Git/writings/Tech/AwsS3/AwsS3.JsObj $HOME/bin/AwsBasic
            ;;
        "$UNIT_TESTS")
            echo "$UNIT_TESTS"
            meld $HOME/Git/writings/Elvenware/development/web/UnitTests $HOME/Dropbox/Elvenware/WebSite/UnitTests
            ;;
        "$JAVASCRIPT_WD")
            echo "$JAVASCRIPT_WD"
            meld $HOME/Git/writings/Elvenware/development/web/JavaScript $HOME/Dropbox/Elvenware/WebSite/JavaScript
            ;;
        "$DATABASE")
            echo "$DATABASE"            
            meld ~/Dropbox/Elvenware/WebSite/Database ~/Git/writings/Elvenware/development/database/ 
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done



