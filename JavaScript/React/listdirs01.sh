ls -d /home/$USER/Git/JsObjects/JavaScript/React/*/  |  while read line; do
   echo "$(basename $line)"
done
