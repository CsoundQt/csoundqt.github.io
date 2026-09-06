# CsoundQt website

Source for the [CsoundQt](https://csoundqt.github.io) website, built with
[MkDocs](https://www.mkdocs.org) and the
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

This repository replaces the old [Pelican](https://getpelican.com)-based
website. Content that used to live in the Pelican site has been converted:

- the top-level pages (`About`, `Install`, `Contribute`, `People`, `Help`)
  live directly under `docs/`
- the news/blog articles live under `docs/news/posts/`
- the old (2015) manual pages are kept for reference under `docs/legacy/`

## How to change the site

You need Python 3 and pip. Install the build dependencies:

```
$ pip install -r requirements.txt
```

To preview the site locally while editing:

```
$ make serve
```

To build the static site into `site/`:

```
$ make build
```

Add or edit Markdown files under `docs/`. News items go into `docs/news/posts/`
and must start with YAML front matter containing at least `title` and `date`,
for example:

```yaml
---
title: Version 9.9.9 Released
date: 2026-09-06
authors:
  - tarmo
tags:
  - release
---
```

The navigation is defined in `mkdocs.yml`. Images referenced from content are
stored in `docs/images/` and linked with site-relative paths such as
`/images/screenshot.png`.

## Publishing

On every push to the `main` branch a GitHub Actions workflow builds the site
(`.github/workflows/build-site.yml`) and publishes it with GitHub Pages.
The workflow also copies the `.well-known/` folder (used for FlatHub
verification) into the build output.
