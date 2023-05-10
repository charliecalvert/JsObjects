#! /bin/bash

S3_CLOUD_IMAGES=s3://s3bucket01.elvenware.com/dev-images/cloud-images/
DESTINATION=${CHARLIE_IO}/assets/images/.

# FLAGS=--recursive --exclude "*" --include "Node0*"
FLAGS='--recursive --include "Azure*" --exclude "*"'
COMMAND="aws s3 cp ${S3_CLOUD_IMAGES} ${DESTINATION} ${FLAGS}"

echo ${COMMAND}
${COMMAND}
# aws ${COMMAND}
# aws s3 cp ${S3_CLOUD_IMAGES} ${DESTINATION} ${FLAGS}
