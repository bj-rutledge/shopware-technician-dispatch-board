chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "",
    });
  });
  
  const swRegex = new RegExp('.shop-ware.com/work_orders');
  
  chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.url.search(swRegex) > 0) {
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
      files: ["scripts/removeElements.js"],
      target: { tabId: tab.id },
    });
  
    /**Blink the  in-transition class and enlarge text*/
    await chrome.scripting.insertCSS({
      files: ["./css/blink.css", "./css/enlarge-text.css"],
      target: { tabId: tab.id },
    });
  });
  