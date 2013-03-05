# Before you run this script, set ELF_USER and 
# ELF_IP=YOUR_REMOTE_MACHINE (Elastic IP)
# Set up a Linux Box
# Set up two private keys
# Copy three scripts

User=$ELF_USER
SshUser=$User@$ELF_IP
CreateBin=CreateBin.sh
SetupGitScript=SetupGit.sh
SetupSshScript=SetupSsh.sh
SetupNodeScript=SetupNode.sh

# Create Bin
scp $CreateBin $SshUser:$Home/$CreateBin
ssh -t $SshUser /bin/chmod +x $Home/$CreateBin
ssh -t $SshUser $Home/$CreateBin
ssh -t $SshUser /bin/rm $Home/$CreateBin

# Copy Scripts
scp $SetupSshScript $SshUser:$Home/bin/$SetupSshScript
scp $SetupGitScript $SshUser:$Home/bin/$SetupGitScript
scp $SetupNodeScript $SshUser:$Home/bin/$SetupNodeScript
ssh -t $SshUser /bin/chmod +x $Home/bin/$SetupSshScript
ssh -t $SshUser /bin/chmod +x $Home/bin/$SetupGitScript
ssh -t $SshUser /bin/chmod +x $Home/bin/$SetupNodeScript

# Run Scripts 
ssh -t $SshUser $Home/bin/$SetupNodeScript
ssh -t $SshUser $Home/bin/$SetupGitScript
