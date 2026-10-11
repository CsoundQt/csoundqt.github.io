---
title: Widgets
---

CsoundQt offers a set of widgets to create a Graphical User Interface. Widgets can be used to show what happens in a real-time performance of Csound, or to control the performance itself. If CsoundQt is built with RtMidi, a widget can directly be connected with any MIDI controller.

You will find a built-in documentation of the widget in CsoundQt's Examples > Widgets. It is recommended to read and click it in addition to the description here.

> Widget screenshots in this section are fresh CsoundQt 7.x captures, except:
> ScrollNumber, Console, Virtual Keyboard, MIDI Learn and the Edit-mode
> view — to be re-captured.


##How to Create a Widget

Open the widget panel (push the *Widgets* button or focus it with *Ctrl+1*) and right-click in it. You get a context menu:

![widgets context menu](../images/widget_create_1.png)

Choose *New Widget* and pick a widget, for instance a Slider. Since *Open Properties when creating widget* is enabled by default (see [Configure](configuring-csoundqt.md)), you immediately get the properties dialog:

![widget properties](../images/widget_properties_1.png)

+    **X/Y** — absolute position in the panel in pixel
+    **Width/Height** — size of the widget in pixel
+    **Min/Max** — minimum/maximum number the widget can return
+    **Channel** — a name for the communication between Csound and a widget
+    **Name** — a unique name for the widget, independent of its channel
+    **Description** — a help text for the widget
+    **MIDI CC / MIDI Channel / MIDI learn** — connect a MIDI controller directly to the widget (needs an RtMidi build)
+    **Show Properties** — lists all properties that can be animated from Csound with `outvalue "<channel>/<property>", value`  


##Edit and Play Mode

Once you clicked OK, you will see the Slider in the widget panel. If you want to change the position, toggle *Widget Edit Mode* (*Shift+Alt+7*).

![edit mode](../images/doc_widgets_03.png)

If Edit Mode is on, you can move the widgets or change their size by dragging the right bottom corner. 

Like in [PD](http://puredata.info) or [Max](http://cycling74.com/max), you can toggle all the time between Edit and Play Mode. If you want to change any of the preferences, double-click on a widget in Edit Mode, or right-click on it in Play Mode (and choose *Properties*).

In Play Mode, you can change the widget values by the mouse and/or the computer keyboard. Note that a new value for the SpinBox will only be active when you hit the Return key.


##Get Values from a Widget

Widgets communicate with Csound via a channel name. As shown above, you set the channel name in the widget properties dialog. Choose a meaningful name.

You can receive the values from a widget with `chnget` (the older `invalue` opcode also works but `chnget` is preferable). If the widget channel is "frequency", the Csound code would be:

    kFreq chnget "frequency"

Most of the widgets return numbers, but some (LineEdit and Button) can return strings. In this case, the Csound code will be something like this:

    S_file chnget "filename"

Widgets communicate through Csound channels; `chn_` declarations are no longer needed for control channels. The `chnget`/`chnset` system is the effective way to move values between Csound and widgets in files which use a lot of widgets.

The k-Variables in Csound, which get the numbers of any widget, will usually be smoothed, to avoid jumps or sudden transitions (in particular for amplitudes). This can be done easily with the `port` opcode. This is a typical code:

    kDb chnget "db" ;receive dB value from a widget
    kDb port kDb, .1 ;smoothes the transitions
    out aSound * ampdb(kDb) ;applies as volume


##Animate widgets from Csound

Since CsoundQt 7.2, any widget property can be changed from the orchestra with a channel/property message:

    outvalue "mychannel/visible", 0
    chnset 1, "mychannel/visible"

The exact property list is shown through the **Show Properties** button in a widget's Properties dialog. Numeric and string properties (position, size, visibility, colour, text, …) are supported. A property message never changes the widget's current value, so a widget can be animated while it keeps controlling its Csound channel. Widgets can also be given a **unique name**, independent of their channel. See the built-in example `C Widgets/Widget_Animation.csd`.


##Reserved Channels

There are some channels which carry some particular functionality. They all start with the underscore character. The first four are for Control/Transport (and usually have no receiver in the Csound code), whereas *_Browse* and *_MBrowse* will pass a string to Csound.

+   **_Play** — If the value of this channel is 1, CsoundQt will play the current csd file (similar to pressing the *Run* button).  
+   **_Pause** — If the value of this channel is 1, CsoundQt will pause/resume the performance (= *Pause* button).  
+   **_Stop** — If the value of this channel is 1, CsoundQt will terminate the performance (= *Stop* button).  
+   **_Render** — If the value of this channel is 1, CsoundQt will render the current csd to an audio file (= *Render* button).

+   **_Browse** — Use a button widget in the *value* mode. When a button is set to this channel, clicking on it (in Play Mode) will open a *Select File* dialog. You can choose here any file, and it will be saved in a string variable. You can also use this channel more than once by adding anything; for instance **_Browse1** and **_Browse2** will store two different file names.
+   **_MBrowse** — The behaviour is similar to *_Browse*, but you can select here more than one file. Ths paths will be seperated by a | character. The following lines of Csound code show a possible result:
    instr Receive_Filenames
        S_files chnget "_MBrowse"
        puts S_files, 1
    endin
    -> /home/jh/Desktop/7chnls.aiff|/home/jh/Desktop/abend1.wav|/home/jh/Desktop/BratscheStereo.aiff|/home/jh/Desktop/chirp40-1300Hz.wav


##Widget appearance: style, fonts

- Right-click a widget and use **Copy Style** / **Apply Style** to reuse a widget's appearance (everything defining its look except position, size, channel(s) and text) on other widgets of the same type.
- Widget panels use a curated set of bundled open-source fonts so a panel looks the same on every platform; the widget font picker is restricted to these families. (The editor, console and configuration fonts can still be any system font.)
- Buttons can opt into a **flat style** that bypasses the native widget: fully configurable background, pressed-background, text, pressed-text, border colour/width/radius, rendered identically on every platform.


##Presets

A preset is another reserved channel. Its goal is to store and recall a widget snapshot. The most simple and intuitive way to store and recall presets is to right-click in the widget panel, and the choose *Store Widget*. There is also a build-in example: Examples > Widgets > Presets.


##Pass Values to a Widget

Widgets can also be used to show values which are changing in Csound, as visual feedback for the user or performer. Any k-variable can be shown by many widgets, like sliders, displays or spin boxes. Just set the widget channel to any useful name, and insert `chnset` in the Csound code (the older `outvalue` opcode also works for plain value updates), for instance:

    kDb randomi -30, -10, 1/2, 3
    chnset kDb, "db"


##Widget Types Overview
This is a short description, followed by a screenshot from the buildin widget examples.

###Slider
The standard widget, well known in all Audio GUIs. It can be either vertical or horizontal.  
![slider](../images/widget_slider_1.png)

###Label
A textbox for comments or similar.  
![label](../images/widget_label_1.png)

###Display
Can display any value from Csound (numbers or strings).  
![display](../images/widget_display_1.png)

###ScrollNumber
Number box whichs values are changed by mouse scrolling.  
![scroll number](../images/doc_widgets_08.png)

###LineEdit
A text field which can be used either for user input (passed to Csound as a string), or display any string (for instance a file name which is received by the _Browse reserved channel).  
![line edit](../images/widget_lineedit_1.png)

###SpinBox
A number box either for user input (via type/return or the scroll bar), or to show any Csound k-value.  
![spin box](../images/widget_spinbox_1.png)

###Button
A button can either fire an event (trigger an instrument or create a function table), or pass a value when pushed. A *latch* option transforms a button to a toggle. Buttons offer a native and a flat, fully themeable style (see above).
![button](../images/widget_button_1.png)

###Waveform
Draws the samples of a Csound f-table directly, one lane per channel. Send the table number to its channel; the cursor position is read/written through a second channel and moved by clicking. Wheel zooms, Shift+wheel scrolls, Ctrl+drag pans, and the view follows the cursor. The waveform stays visible after the performance stops. See the built-in example `C Widgets/Waveform_Widget.csd`.
![waveform](../images/widget_waveform_1.png)

###Knob
Similar functionality as slider, just different design.  
![knob](../images/widget_knob_1.png)

###Checkbox
Sends 1/0 if checked/unchecked. So the behaviour is actually the same as a button in latch mode.  
![checkbox](../images/widget_checkbox_1.png)

###Menu
Shows names, but returns numbers (starting from zero) for the different items.  
![menu](../images/widget_menu_1.png)

###Controller
A widget with many possibilities. Can be used as x/y pad, or as slider, or as signal display.  
![controller](../images/widget_controller_1.png)

###Console
Displays the output of the Csound console in a widget.  
![console](../images/doc_widgets_16.png)

###Graph
Displays Csound's function tables, and FFT analysis, too.
![graph](../images/widget_graph_1.png)

###Table Plot
Visualizes the contents of a table in real-time. Send the table number to its channel to select what to plot; send -1 to update the plot with the last set table. It also accepts string values: the table can be set with `outvalue "@set <tablenumber>"` and updated with `outvalue "@update"`. See the built-in example `C Widgets/Tableplot_Widget.csd`.
![table plot](../images/widget_tableplot_2.png)

###Scope
Displays Csound's audio output — or any named Csound audio channel: `chnset asignal, "scopechan"` is displayed by a scope whose second channel is set to `scopechan`. See the built-in example `C Widgets/Scope_Widget.csd`.
![scope](../images/widget_scope_1.png)

###Virtual Keyboard
This widget is not under the *Create Widget* submenu, as it is not part of the widget panel. It is created by pushing the *Keyboard* button, and pops up as independent panel. It can substitute an external MIDI keyboard.  
![midi keyboard](../images/doc_widgets_19.png)

##MIDI Integration
If your CsoundQt has been compiled with RtMidi support, you can assign any MIDI controller directly to any widget. Just open the properties and type in MIDI channel and Controller Number, or use the MIDI Learn functionality.  
![midi learn](../images/doc_widgets_20.png)

