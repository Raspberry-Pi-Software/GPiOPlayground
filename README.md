# GPiOPlayground
A Simple GPiO Manager and Automation Creator For Managing Automations, GPIO Pins On Your Raspberry Pi (supported model)
> ⚠️ GPiO Playground runs on a **Python 3.11 or later** installation. Make sure your Python installation is up to date!

> ✖️ If you have any problems or issues while *installing and initializing on a **supported model***, make an issue [here](https://github.com/Raspberry-Pi-Software/GPiOPlayground/issues).

GPiO Playground is a software that allows you to create basic programs and automations through a website remotely to your Raspberry Pi. This program manages your Raspberry Pi's GPIO pins in safe hands.

GPiO Playground includes a graphical interface and a text interface.
- The text interface is the one if you're a programming geek
- The graphical interface is the one if you're starting on the Raspberry Pi topic.
  
## Installation
### In package tool:
Use this command to install GPiO Playground onto your Pi using the Package Tool:
```bash
rpisft install device-manager
```
Use this command to uninstall GPiO Playground from your Pi using the Package Tool:
```bash
rpisft uninstall device-manager
```
### In Terminal (manual install)
Use this command to install the GPiO Playground tool onto your Pi:
```bash
git clone https://github.com/Raspberry-Pi-Software/Device-Manager && cd Device-Manager && sudo bash post-install;
```
Use this command to remove the GPiO Playground tool from your Pi:
```bash
cd Device-Manager && sudo bash uninstall;
```
The usage for this tool is:
```bash
rpisft exec gpio-pg
```

