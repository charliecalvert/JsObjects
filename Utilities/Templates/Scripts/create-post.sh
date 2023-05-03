#/bin/bash

now=$(date +"%Y-%m-%d")

post_dir=../_posts/

read -p "Enter the post name: " post_variable;

echo "Creating post: $post_variable"

fileName=${now}-${post_variable}.markdown

echo ${post_dir}$fileName

touch ${post_dir}$fileName

if [ ! -d "$post_dir" ]; then
	mkdir $post_dir
fi

yearmonth=`date "+%Y/%m"`
postdate=`date "+%Y-%m-%d"`
jekylldate=`date "+%Y-%m-%d"`

cat <<EOF > /home/ubuntu/Git/coderzendo.github.io/_posts/$postdate-$post_variable.markdown
---
layout: post
date: 2023-01-12 02:55:38 -0800
title: $post_variable
excerpt:
---
EOF