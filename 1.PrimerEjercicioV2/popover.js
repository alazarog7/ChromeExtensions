document.getElementById("switch").addEventListener('click', async function(){
    let tabs = await chrome.tabs.query({currentWindow: true, active: true});
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {command:"change-tab", theme: "dark"});
});