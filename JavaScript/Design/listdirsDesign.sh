ls -d /home/$USER/Git/JsObjects/JavaScript/Design/*/  |  while read line; do
   echo "$(basename $line)"
done
