Version 0.9.3 Released
########################

:date: 2016-11-22
:slug: release093
:author: Tarmo Johannes
:tags: release

The source code and binaries can be downloaded from: https://github.com/CsoundQt/CsoundQt/releases/tag/0.9.3

Version 0.9.3  introduces some new features, fixes a number of bugs and although not in the final release, the new qt based html5 support is available for testing from branch *qthtml*.
For instructions how to use the branch see
https://github.com/CsoundQt/CsoundQt/wiki/Checking-out-develop,-qthtml-or-other-branch

New features
-------------
* Table editor for GEN07 tables     

.. youtube:: uJCbcca0Bd4

* Improved and extended Insert/Update CabbageText -  conversion of CsoundQt widgets into < Cabbage> definition.

.. youtube:: ijdCoU0ccsI

* Experimental html5 support based on Qt libraries -  no CEF dependency any more, available also on OSX and Linux.

.. youtube:: zH5UkgUuzX0

Fixes
------

* Fixed wrong widgets behaviour if MIDI channel is 0 and widget's CC and Channel are unset.
* Support for building both with older and newer Csound source code (CS_APIVERSION 4)
* Numerous fixes in examples, correction of spelling errors
* Better colour for word completion box


Tarmo Johannes trmjhnns@gmail.com
