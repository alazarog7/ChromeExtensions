let buttons = document.getElementsByClassName("themes");

for (const element of buttons) {
    element.addEventListener('click', async function(e){
        let tabs = await chrome.tabs.query({currentWindow: true, active: true});
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {theme: e.target.id});
    });
}
