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
* Run the server `bundle exec jekyll serve`
* Visit [`localhost:4000`](http://localhost:4000)

## Edit and publish
Since Github does [not yet support i18n plugins](https://github.com/github/pages-gem/issues/401), we need to compile the page locally.

* Install [ruby](https://www.ruby-lang.org/en/downloads/) (> v2.5) and [bundler](https://bundler.io/).
* Install node gh-pages for publishing: `npm i -g gh-pages`
* Make sure you have the correct write rights on this repo.
* Run `./deploy.sh`

## Structure

- `_data`: Structured data to be used in views
- `_drafts`: Blogs that are not yet finished
- `_i18n`: Translations as `yml` and `md` files
- `_includes`: Re-usable html templates for use _inside_ other components
- `_layouts`: Re-usable html templates that set a _context_ around content
- `_posts`: Published blog posts
- `_site`: Build folder - acts as root for `https://ontola.io`
- `config`:
- `pages`: HTML or MR pages which should extend `layouts`. You can refer to translation files.
