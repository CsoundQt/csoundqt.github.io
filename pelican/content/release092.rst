Version 0.9.2 Released
######################

:date: 2016-03-07
:slug: release092
:author: Tarmo Johannes
:tags: release

The source and upcoming binaries can be downloaded from: https://github.com/CsoundQt/CsoundQt/releases/tag/0.9.2


Version 0.9.2 is mostly a bug-fix release, adding also a number of new convenience features.

See a short demo

.. youtube:: q_1SUT1wD6o

New in version 0.9.2
--------------------

- CsoundQt tries to keep **one running instance**. When new Csound file is opened in file manager, it forwards the info to the running instance and it opens the file **in a new tab**. You can start also more than one instances of CsoundQt if you start the program without any arguments (i.e not opening a file).
     

- For Unix/Linux builds there is now the **install target** for system wide installation (Run `sudo make install`). It installs and registers also mime-types for Csound files, a desktop start-up file and icon for CsoundQt. So it is now easy to open CsoundQt or any Csound files with CsoundQt.

|

.. image:: |filename|/images/mimetypes.png
   :scale: 50 %
   :alt: Csound mimetypes
   :align: center
   :target: |filename|/images/mimetypes.png


- **Virtual MIDI keyboard** has been improved -  new sliders for control channels, possibility to **play notes on computer keys** (keyboard mapping is similar to Csound's VirtualMidi (Z - lowest C, S - C#, X - lowest D etc), see <http://www.csounds.com/manual/html/MidiTop.html>, Table 6

|

.. image:: |filename|/images/virtual+sliders.png
   :scale: 50 %
   :alt: Csound mimetypes
   :align: center
   :target: |filename|/images/virtual+sliders.png

- There is **Virtual MIDI keyboard button on toolbar**


- **Midi Learn button** is straight accessible from widget's properties dialog window.

 
- **MIDI button** (or similar controller) can **start a Csound event** defined in a Button Widget properties, if the type of the button is set to "event".



Fixes
-------

- *sensekey* works now when CsoundQt is launched  via desktop file or from Applications (Linux, OSX)

- Better search paths in project files to find *rtmidi* and *pythonqt* sources

- Fixed some paths and configuration for OSX build

- Fixed occasional pink widget panel background

- Restore cursor position after evaluating a section (on an arrow key press).

- Virtual Midi Keyboard is shown/hidden correctly on toggling the button/menu item, destroyed correctly on exit.

- Parenthesis markup is corrected so that it does not brake undo chain any more.

- Fixed selection end (mouse release) outside editor panel.

- Show Midi Learn and midi controls only for widgets that accept MIDI.

- Widgetpanel shown/hidden state gets restored correctly on strartup.

- Fixed Midi Learn CC number detection.

- Fixed indentation (many Tab presses actually create tabs)

