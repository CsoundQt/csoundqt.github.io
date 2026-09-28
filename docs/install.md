## CsoundQt 7

csoundqt 7 is built to support csound >= 7 (this is the current, development 
version of csound)

See <https://github.com/CsoundQt/CsoundQt/releases>

### Linux

* AppImage: <https://github.com/CsoundQt/CsoundQt/releases/latest/download/CsoundQt-x86_64.AppImage>
* Flatpak: <https://flathub.org/en/apps/io.github.CsoundQt.CsoundQt>

In both cases csoundqt is shipped with its own version of csound

### macOS

1. Download the **CsoundQt.dmg** from
   <https://github.com/CsoundQt/CsoundQt/releases>.

2. Open the *.dmg* and drag the application into the
   Applications folder.

3. Install the csound `.pkg` inside the .dmg 


### Windows

1. Download and install csound: <https://github.com/CsoundQt/CsoundQt/releases/latest/download/Csound7-windows-x86_64.exe>
2. Download and install csoundqt: <https://github.com/CsoundQt/CsoundQt/releases/latest/download/CsoundQt-windows-x86_64.exe>

---------------------

## CsoundQt 6

### Install Csound first

CsoundQt is a frontend for Csound, so **Csound needs to be installed first.**

[*&rarr; Csound download page*](https://csound.com/download)

### macOS

1. Download the **CsoundQt-[Version Number]-MacOS.dmg** from
   <https://github.com/CsoundQt/CsoundQt/releases>.

    !!! note
        Choose the plain version (without "pythonqt") for normal use.

2. Open the *.dmg* and drag the green CsoundQt application into the
   Applications folder.

### Windows

1. Download the **CsoundQt-[Version Number]-Win64.zip** from
   <https://github.com/CsoundQt/CsoundQt/releases>.
2. Unzip the file.
3. Go to the *CsoundQt (or bin)* folder.
4. Select and copy the whole content of the *bin* folder.
5. Go to *C: &rarr; Program Files &rarr; Csound6_x64 &rarr; bin* and paste all
   the copied files here.
6. Send "CsoundQt-d-html-cs6.exe" from this folder as a shortcut to your
   desktop if you like.

### Linux

CsoundQt binaries are in most of the package managers.

These binaries might be built without *RtMidi* and/or without *PythonQt*
support. If you need to work with it, you should **build CsoundQt**.
Instructions can be found at <https://github.com/CsoundQt/CsoundQt/wiki> and
in the [BUILDING.md](https://github.com/CsoundQt/CsoundQt/blob/master/BUILDING.md)
file in the sources.

### Building from source

