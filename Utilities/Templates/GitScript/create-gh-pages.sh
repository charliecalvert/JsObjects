#/bin/bash

# sudo apt-get install ruby-full build-essential zlib1g-dev
# Create a branch called gh-pages, with no history or contents, 
# and switch to it.
git checkout --orphan gh-pages

# Delete original code from your default 
# branch.
git rm -rf .

# Create a Jekyll site
jekyll new --skip-bundle .

# Get version number here: https://pages.github.com/versions/
gem "github-pages", "~> 227", group: :jekyll_plugins

bundle install