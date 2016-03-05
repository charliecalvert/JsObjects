Replace spaces in file names:

    find -name "* *" -type f | rename 's/ /_/g'