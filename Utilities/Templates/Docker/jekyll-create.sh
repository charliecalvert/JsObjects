export JEKYLL_VERSION=3.8
export ELFBLOG=$HOME/Source/ElfBlog
mkdir -p $ELFBLOG
cd $ELFBLOG


docker run --rm --volume="$PWD:/srv/jekyll"  \
   -it jekyll/jekyll:$JEKYLL_VERSION  \
   jekyll new .

docker run --rm --volume="$PWD:/srv/jekyll"  \
   -it jekyll/jekyll:$JEKYLL_VERSION  \
   jekyll  build
