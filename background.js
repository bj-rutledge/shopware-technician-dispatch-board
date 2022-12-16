/**
 * Created by BJ Rutledge 
 * Created 12/1/2022
 * Licence Apache 
 * This service is built for the Shopware Workflow Screen. Its purpose is to create 
 * a "Dispatch Board View" to be used on a big screen TV or Monitor out in 
 * a shop. 
 * The scripts herein remove all extraneous components unrelated to dispatching 
 * workorders to shop technicians, enlarge the text of technician names, 
 * and causes new/incomming repair orders to blink. 
 * None of the scripts capture,examine, transfer, move, or interact in 
 * any way with data. Only the HTML elements are touched. 
 */

const scriptFiles = ["scripts/removeElements.js"];

const cssFiles = ["./css/blink.css", '/css/enlarge-text.css'];

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "",
  });
});

const swRegex = new RegExp(".shop-ware.com");

chrome.action.onClicked.addListener(async (tab) => {
  //Check to see if we're on shopware. If not, bail. 
  if (!(tab.url.search(swRegex) > 0)) {
    return;
  }

  const state = await chrome.action.getBadgeText({ tabId: tab.id });
  //Already on. Notihng to do here!
  if (state === "ON") {
    return;
  }

  //set action badge to state
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: "ON",
  });

  await chrome.scripting.executeScript({
    files: scriptFiles,
    target: { tabId: tab.id },
  });

  /**Blink the  in-transition class and enlarge text*/
  await chrome.scripting.insertCSS({
    files: cssFiles,
    target: { tabId: tab.id },
  });
});
