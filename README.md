# Webpage & blog for Ontola
Check it out [here](https://ontola.io).
This project runs on Jekyll and is hosted by Github Pages.

## Adding a post

Create a `yyyy-mm-dd-title.md` file in `./_posts`.

## Run
* `git clone git@github.com:ontola/ontola.github.io.git`
* Install [Ruby (2.3+)](https://www.ruby-lang.org/en/documentation/installation/)
* Install Bundler: `gem install bundler`
* Install jekyll using bundler: `bundle install`
* Install [GitHub Pages](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) or [Jekyll](https://jekyllrb.com/docs/installation/)
* Run the server `bunlde exec jekyll serve`
* Visit [`localhost:4000`](http://localhost:4000)

## Edit and publish
Since Github does [not yet support i18n plugins](https://github.com/github/pages-gem/issues/401), we need to compile the page locally.

* Install node gh-pages for publishing: `npm i -g gh-pages`
* Commit and push to the gh-pages branch: `gh-pages -d _site`
