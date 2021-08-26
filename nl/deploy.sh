#!/bin/bash
set -e
bundle exec jekyll build
# For some reason this file is skipped. This is required for hosting on the ontola.io domain using github pages.
cp CNAME ./_site/CNAME
gh-pages -d _site
