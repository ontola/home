# Ontola Home Page

Future home page for [Ontola](https://ontola.io/).

## Running locally

```sh
# Install dependencies
yarn
# run dev server
yarn dev
```

## Deployment

We deploy to AWS Amplify, which is built automatically on pushing commits to github.
Since we use I18n, we can't `export` the site.

## Adding content

- All written content resides in the `src/ontent` directory.
- **Blog post**: Create a `article-title.en.mdx` file in `blog`. Make sure to add a `title` and a `description`. Create a Dutch translation with the same name (`article-title.nl.mdx`), too.
- **Tech item**: Similar to above, but also make sure to add a `techname.svg` image to `assets/images/tech`.
- **Custom page**: Create a `.tsx` file in `src/pages` with the name of the path. Probably easiest to clone `about.tsx` and copy that logic.

## Tech

- Loosely based on [this boilerplate](https://github.com/ixartz/Next-js-Boilerplate).
- `stitches` is used for styling
