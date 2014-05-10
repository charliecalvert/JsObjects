#! /bin/bash

# Before you run this script, set ELF_USER and 
# ELF_IP=YOUR_REMOTE_MACHINE (Elastic IP)
# Set up a Linux Box
# Set up two private keys
# Copy three scripts

User=$ELF_USER
SshUser=$User@$ELF_IP
HomeDir=/home/$ELF_USER
CreateBin=CreateBin.sh
SetupGitScript=SetupGitForPresTest.sh
SetupSshScript=SetupSsh.sh
SetupNodeScript=SetupNode.sh

# Create Bin
scp $CreateBin $SshUser:$HomeDir/$CreateBin
ssh $SshUser /bin/chmod +x $HomeDir/$CreateBin
ssh $SshUser $HomeDir/$CreateBin
ssh $SshUser /bin/rm $HomeDir/$CreateBin

# Copy Scripts
scp $SetupSshScript $SshUser:$HomeDir/bin/$SetupSshScript
scp $SetupGitScript $SshUser:$HomeDir/bin/$SetupGitScript
scp $SetupNodeScript $SshUser:$HomeDir/bin/$SetupNodeScript
ssh $SshUser /bin/chmod +x $HomeDir/bin/$SetupSshScript
ssh $SshUser /bin/chmod +x $HomeDir/bin/$SetupGitScript
ssh $SshUser /bin/chmod +x $HomeDir/bin/$SetupNodeScript

# Run Scripts 
ssh $SshUser $HomeDir/bin/$SetupNodeScript
ssh $SshUser $HomeDir/bin/$SetupGitScript
