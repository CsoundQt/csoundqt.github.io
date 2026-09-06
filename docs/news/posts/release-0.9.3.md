---
title: Version 0.9.3 Released
date: 2016-11-22
authors:
  - tarmo
tags:
  - release
---

The source code and binaries can be downloaded from: https://github.com/CsoundQt/CsoundQt/releases/tag/0.9.3

Version 0.9.3 introduces some new features, fixes a number of bugs and although not in the final release, the new qt based html5 support is available for testing from branch *qthtml*.
For instructions how to use the branch see
https://github.com/CsoundQt/CsoundQt/wiki/Checking-out-develop,-qthtml-or-other-branch

## New features

- Table editor for GEN07 tables

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/uJCbcca0Bd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> referrerpolicy="strict-origin-when-cross-origin"></iframe>

- Improved and extended Insert/Update CabbageText - conversion of CsoundQt widgets into < Cabbage> definition.

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/ijdCoU0ccsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> referrerpolicy="strict-origin-when-cross-origin"></iframe>

- Experimental html5 support based on Qt libraries - no CEF dependency any more, available also on OSX and Linux.

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/zH5UkgUuzX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> referrerpolicy="strict-origin-when-cross-origin"></iframe>

## Fixes

- Fixed wrong widgets behaviour if MIDI channel is 0 and widget's CC and Channel are unset.

- Support for building both with older and newer Csound source code (CS_APIVERSION 4)

- Numerous fixes in examples, correction of spelling errors

- Better colour for word completion box
