---
title: Overview
---

CsoundQt is a frontend for [Csound](https://csound.com) featuring a highlighting editor with autocomplete, interactive widgets and integrated help. It is a cross-platform and aims to be a simple yet powerful and complete development environment for Csound. 

The main parts of CsoundQt are:

+ The [**Editor**](editor.md) which offers syntax highlighting, self-completion of opcode names and other parts of the code, optional split view including a spread-sheet like display of the score, and different integrations of the Csound Manual.  
+ The [**Widgets**](widgets.md) which extend Csound by standard graphical elements like sliders, number boxes, buttons etc.  
+ Different [**Run**](run.md) options including Terminal execution of Csound and Recompilation of Code. MIDI can be handled by CsoundQt either with the standard Csound MIDI modules, or with CsoundQt's own MIDI handler (using RtMIDI).  
+ A [**Live Event Sheet**](live-event-sheet.md) which allows easy and multi-layered real-time generation of score events, including loops and some on-the-fly manipulation of scorelines.  
+ A native integration of [**PythonQt**](python.md) which gives full scripting control of all parts of CsoundQt and offers an easy way to extend CsoundQt via Python code. A Python code pad with Python syntax highlighting is included.  
+ Easy access to the Csound [**Utilities**](utilities.md) with interactive adjustment of parameters.

The [**Menu Short Reference**](csoundqt-menus.md) doc explains all menu items in short.  
The [**Configuration**](configuring-csoundqt.md) doc is about the various configuration settings in CsoundQt (including Csound).  
[**Tips and Tricks**](tips-and-tricks.md) can help to overcome some common issues.
