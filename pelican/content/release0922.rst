Version 0.9.2.2 Released
########################

:date: 2016-08-16
:slug: release0922
:author: Tarmo Johannes
:tags: release

The source code can be downloaded from: https://github.com/CsoundQt/CsoundQt/releases/tag/0.9.2.2


Version 0.9.2.2 is a bug-fix release.


Fixes
------

* Fixed serious error on Linux that made CsoundQt crash when STK-opcode plugin was present but RAWWAVE_PATH was not set (typical when Csound was installed with package manager).
* Work and improvements on html5 support (Michael Gogins)
* Fixed build failure with Csound debugger enabled (Felipe Sateler)
* Work on different examples + some new examples (Joachim Heintz)
* Fixed Configuration dialog resizing so it cannot be out of screen any more
* Fixed crash on closing first tabs and using midi (midi-listeners' corrected removal, issue #211)
* Corrected auto-completion of functions (like int, ampdb etc issue #214)
* Removed (most of) lines causing "Slot not found" messages in command line output.



Miscellaneous
-------------

* Thorough documentation on CsoundQt web-page http://csoundqt.github.io/pages/documentation.html (by Joachim Heintz)
* Link to the documentation in Help menu (shortcut F1)


Tarmo Johannes trmjhnns@gmail.com
