async function load(){
    let text = await chrome.storage.sync.get(["text"]);
    document.getElementById("text").value = text.text;
}

function sendText(){
    document.getElementById("result").innerHTML = "Loading..."
    chrome.runtime.sendMessage({
        message:'to-chatgpt',
        content: document.getElementById("text").value,
        command: document.getElementById("command").value
    }, ()=>{});
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.message === "send-result"){
        document.getElementById("result").innerHTML = request.content;
    }
})

load();
document.getElementById("submit").addEventListener("click", sendText);