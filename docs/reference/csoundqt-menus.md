---
title: CsoundQt Menus
---

> Covers CsoundQt 7.x. Keyboard shortcuts below are the defaults.
> (On macOS, substitute *CTRL* key for *COMMAND* key and *ALT* for *OPTION* key.)
> The key shortcuts can be changed in *Edit > Set keyboard shortcuts*

### File

   + **New** (*CTRL+N*) Create new untitled file
   + **Open** (*CTRL+O*) Open existing file
   + **Save** (*CTRL+S*) Save current file
   + **Save as** (*CTRL+SHIFT+S*) Save current file as a different file
   + **Export without widgets** Save current file as a different file without the widget section
   + **Reload** (*ALT+R*) Revert file to last saved version
   + **Close current tab** (*CTRL+W*) Close current file
   + **Print** (*CTRL+P*) Print current file
   + **File Information** Display information about current file
   + **Recent files** List recently opened files
   + **Templates** Select a file from Templates folder
   + **Exit** (*CTRL+Q*) Exit CsoundQt

### Edit

   + **Undo** (*CTRL+Z*) Undo last change
   + **Redo** (*CTRL+SHIFT+Z*) Redo change
   + **Cut** (*CTRL+X*) Cut selected text
   + **Copy** (*CTRL+C*) Copy selected text to clipboard
   + **Paste** (*CTRL+V*) Paste clipboard in current cursor position
   + **Evaluate Selection** (*SHIFT+CTRL+W*) Evaluate selected code
   + **Evaluate Section** (*SHIFT+CTRL+E*) Evaluate code section
   + **Code Pad in Csound Mode** (*SHIFT+ALT+S*) Toggle Code Pad Csound mode
   + **Find and replace** (*CTRL+F*) Open the inline find bar (incremental search, wrap-around, all-match highlighting)
   + **Find again** (*CTRL+G*) Repeat last search
   + **Go to line** (*CTRL+L*) Jump to a line number
   + **Autocomplete** (*CTRL+M*) Trigger code completion
   + **Comment/Uncomment** (*CTRL+/*) Comment / Uncomment selected text (add / remove ';' character before each line)
   + **Indent** (*CTRL+I*) / **Unindent** (*SHIFT+CTRL+I*) Indent handling for current line / selection
   + **Kill line** (*CTRL+K*) Remove current line
   + **Kill to End of Line** (*SHIFT+ALT+K*) Remove text from cursor to end of line
   + **Show/hide line number area** (*SHIFT+ALT+L*) Show / hide line numbers in editor
   + **Show Orchestra / Score / Options** (*SHIFT+ALT+1/2/3*) Show the corresponding csd section
   + **Toggle parameter mode** (*SHIFT+ALT+P*) Toggle between different modes of code completion
   + **Join orc/sco** Opens dialog for joining open orc and sco files into a new csd file
   + **Insert/Update Cabbage text** (*SHIFT+CTRL+C*) Insert a `<Cabbage>` section or update it
   + **Widget edit mode** (*SHIFT+ALT+7*) Turn widget edit mode on/off
   + **Configuration** (*CTRL+,*) Open configuration panel
   + **Set keyboard shortcuts** Change / set / restore keyboard shortcuts

###Control

   + **Run Csound** (*CTRL+R*) Run current csd file in realtime to sound card
   + **Run in Terminal** (*CTRL+SHIFT+T*) Run current csd in external shell
   + **Pause** (*CTRL+SHIFT+M*) Pause / resume execution
   + **Render to file** (*ALT+F*) Run current csd and write to disk
   + **Record** (*CTRL+SPACE*) Run current csd in realtime and record Csound's audio output to disk
   + **Stop** (*CTRL+.*) Terminate execution of current csd
   + **Stop All** (*CTRL+SHIFT+.*) Terminate all running csd tabs
   + **Edit AudioFile** Edit last audio file in external editor
   + **Play Audiofile** Play generated audio file in external player

###View

   + **Show Editor** (*CTRL+0*) Show / hide the editor (e.g. when working with an external editor)
   + **Widgets** (*CTRL+1*) Show / raise the widget panel
   + **Help Panel** (*CTRL+2*) Show / raise the Csound Manual panel
   + **Output Console** (*CTRL+3*) Show / raise the output console
   + **HTML5** (*CTRL+4*) HTML5 view (only in `html_support` builds)
   + **Inspector** (*F5*, raise: *CTRL+5*) Toggle Inspector Panel visibility
   + **View Code Graph** Shows code as flow chart (needs graphviz `dot`, see [Configure](configuring-csoundqt.md))
   + **Code Pad** (*CTRL+8*) Toggle Code Pad visibility
   + **Utilities** (*CTRL+9*) Open Utilities dialog
   + **Virtual Keyboard** (*CTRL+SHIFT+V*) Substitute an external MIDI keyboard
   + **View Full Screen** (*F11*) Toggle full screen view
   + **Split View** (*CTRL+SHIFT+A*) Toggle split view of instruments, score, and optional other sections

###Examples

   + **Getting Started** Basic examples and built-in tutorials
   + **FLOSS Manual Examples** All examples from the [Csound FLOSS Manual](http://floss.booktype.pro/csound)
   + **McCurdy Collection** Many of Iain McCurdy's [Realtime Examples](http://iainmccurdy.org/csound.html) converted to CsoundQt by René
   + **Live Collection** Examples with live audio input
   + **Widgets** Characteristics and usage of CsoundQt's widgets
   + **Synths** Different synthesizer implementations
   + **Music** Musical pieces written in or converted to Csound
   + **Useful** Audio / MIDI tester and other useful stuff
   + **Miscellaneous** Various examples 

###Favorites

Direct access to any folder which is set in *Configure > Environment > Favorite dir*

###Help

   + **Show opcode entry** (*SHIFT+F1*) Show opcode entry for opcode under cursor or selected in Help Panel
   + **Show opcode entry in external browser** (*ALT+SHIFT+F1*) Opens opcode entry for opcode under cursor or selected in external browser
   + **Help Back** (*CTRL+LEFT ARROW*) Go back in help browser history
   + **Help Forward** (*CTRL+RIGHT ARROW*) Go forward in help browser history
   + **Csound Manual** Show the Csound Manual 
   + **Download Csound Manual** Open browser and load a page to download the Csound Manual
   + **Opcode Overview** Show opcode overview in help panel
   + **Opcode Quick Reference** Show ordered short reference of all Csound opcodes
   + **GEN Routines** Show GEN Routines overview 
   + **Open Quick Reference Guide** Open this documnt as pdf
   + **Reset Preferences** Reset all CsoundQt preferences (should be used with caution in case of bugs due to wrong preference settings)
   + **Report a Bug** Direct access to bug report (for CsoundQt, not Csound)
   + **Request a Feature** Direct access to feature request (for CsoundQt)
   + **Csound IRC Chat** Join Csound's IRC chat
   + **About CsoundQt** Info and links
   + **Donate to CsoundQt** Free speech and free beer both need some support

###Context

(Right mouse click in text area)

   + **Undo** (*U*) Undo last edit
   + **Redo** (*R*) Redo last edit
   + **Cut** (*T*) Cut selection
   + **Copy** (*C*) Copy selection
   + **Paste** (*P*) Paste selection
   + **Delete** Delete selection
   + **Select All** Select all text in editor
   + **Evaluate Selection** Evaluate selected text
   + **Opcode Help** Show opcode entry for opcode under cursor or selected in Help Panel
   + **Show/hide line numbers** Toggle line number view
   + **Opcodes** Selection of opcodes by category

