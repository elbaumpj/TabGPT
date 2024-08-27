chrome.tabs.onCreated.addListener(function(tab) {
  // Check if the tab is newly created and is the default new tab page
  if (tab.pendingUrl === 'chrome://newtab/' || tab.pendingUrl === "") {
    // Wait a moment to ensure the tab is fully initialized
    setTimeout(() => {
      chrome.tabs.update(tab.id, { url: 'https://chatgpt.com/' });
    }, 100);
  }
});
