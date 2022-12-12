# Shopware Technician Dispatch Board 


This is a Google Chrome plugin that works for Shopware users. The plugin is a service worker that modifies how shopware is displayed. It in no way accesses or attempts to access or modify any data whatsoever. The service simply changes what is seen and how it is seen. There are no external API calls. No transfer of data of any kind. It was created to be displayed on a big screen in the shop, so that technicians have a quick view of the workflow in the shop. 

I have been working with Shopware for the last several months. Our shop was previously on Mitchel and used a dispatch board for our ROs. When we had a new RO, we would place it on a clip board and hang it up on the dispatch board. The tech would see that he had a new job and grab the clipboard. Since moving to Shopware, where there is no clipboard, the technicians have not known when they had an RO assigned to them. They are having a difficult time creating the habit of checking their devices for new work. We added a TV screen in the shop and started putting the 'Workflow' page on it; however, the workflow page had too many unnecessary items that took too much space on the display. As well, the technicians were not really looking at the screen either. Maybe it was too much noise. 

I created this plugin so that it will remove all the unnecessary and try to solve the problem of technicians not looking at the board. Normally the incoming ROs have a red box drawn around them until they are accepted, but that was not enough to get the technicians' attention. With this in mind, I decided to make the incoming ROs blink to better grab the attention of the technicians. 

# Directions
At present, this plugin is not available on Chrome's plugin store. To install, you will need to enable developer mode in extensions and then "load unpacked" extension. 

#### How to install the unpacked extension in Chrome
* Go to Chrome Settings using three dots on the top right corner.
* Now, Enable developer mode.
* Click on Load Unpacked and select the folder that you have downloaded this extension to. Note: You need to select the folder in which the manifest file exists. ...
* The extension will be installed now.
* Click on the [extensions](images/ChromeExtensions.png) icon in chrome
* Click the Pin icon next to "Shopware Dispatch Board"

#### How to use Shopware Dispatch Board
* Once pinned, simply click the icon. When active, it will display "ON" 
* To turn off, press CTRL + R 

I find that it is better when the Dispatch Board is displayed in full screen mode. To display in full screen, press F11. To exit out of full screen, press F11. 

#### To activate
* Navigate to the workflow screen. 


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

