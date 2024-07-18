## Shopware Workflow Enhancement Chrome Plugin

### Overview

The **Shopware Workflow Enhancement Chrome Plugin** is a lightweight service worker designed to improve the workflow experience for Shopware users. It optimizes the display of Shopware without accessing or modifying any data, ensuring a seamless and distraction-free interface.

### Key Features

1. **Subtle Modifications**: The plugin discreetly adjusts how Shopware is presented, streamlining the user experience. It removes unnecessary components and clutter, allowing technicians to focus on essential information.

2. **Big Screen Compatibility**: Originally developed for large screens within the shop environment, the plugin provides a quick overview of the workflow. Technicians can easily identify new Repair Orders (ROs) without unnecessary distractions.

3. **Attention-Grabbing Alerts**: Incoming ROs now blink until accepted, ensuring that technicians promptly notice new assignments. This feature enhances visibility, especially in busy shop settings.

### Installation

To use the Shopware Workflow Enhancement Chrome Plugin:

1. Clone this repository.
2. Load the plugin as an unpacked extension in Google Chrome.
3. Enjoy an improved workflow experience in Shopware!

Feel free to contribute or provide feedback. Let's make Shopware even better together! 🛠️

---

If you need any further adjustments or additional details, please don't hesitate to let me know. And hey, even AI assistants have their "oops" moments! 😄

# Directions
At present, this plugin is not available on Chrome's plugin store. To install, you will need to download all the sorce files to a folder, enable developer mode in your Chrome Extensions page, and then "load unpacked" extension. Instructions below. 

#### How to download
* go to https://github.com/bj-rutledge/shopware-technician-dispatch-board (if you are reading this on this site, simply scroll up)
* click on the 'Code' dropdown box
* Select 'Download Zip' 
* Download to a folder on your computer and Unzip
  * If you are on a windows machine, you can unzip the files by opening the folder and selecting 'Extract all' in Windows Explorer 

#### How to install the unpacked extension in Chrome
* Go to Chrome Settings using three dots on the top right corner.
* Now, Enable developer mode.
* Click on 'Load Unpacked' and select the folder that you have downloaded this extension to. Note: You need to select the folder in which the manifest file exists. ...
* The extension will now be installed.
* Click on the [extensions](images/ChromeExtensions.png) icon in chrome
* Click the Pin icon next to "Shopware Dispatch Board". This will load the extension [icon](images/icon-128.png) on the top right of your Chrome Browser.

#### How to use Shopware Dispatch Board
* Navigate to the "Workflow" screen in Shopware. 
* Once pinned, simply click the icon. When active, it will display "ON" 
* To turn off, press CTRL + R (This will refresh the screen). 

I find that it is better when the Dispatch Board is displayed in full screen mode. To display in full screen, press F11. To exit out of full screen, press F11. 




## Features 

* Removes all un necessary elements for view. 
* Causes an un accepted RO to blink until the tecnician accepts it. 
* Enlarge the technician names for better visibility at a distance. 

# Note
The .vscode > jsonconfig.json file is there to provide intilesense for Chrome's API.  
```
{ 
    "typeAcquisition": { 
        "include": ["chrome"] 
    } 
}

```

