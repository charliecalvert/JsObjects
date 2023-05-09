# aws s3 cp s3://s3bucket01.elvenware.com/dev-images/cloud-images/Node01.png .
aws s3 cp s3://s3bucket01.elvenware.com/dev-images/cloud-images/ /home/ubuntu/Git/charliecalvert.github.io/assets/images/. --recursive --exclude "*" --include "Node0*"
# aws s3 cp s3://s3bucket01.elvenware.com/dev-images/cloud-images/ . --exclude "*" --include "Node0*" 
