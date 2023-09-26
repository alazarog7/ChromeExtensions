chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
      if (request.message === "summarize-text"){
        await chrome.storage.sync.set({ 'text': request.content })
      } else if(request.message === "to-chatgpt"){
        var response =  await sendToGpt(request.command, request.content);
        chrome.runtime.sendMessage({message:'send-result', content: response}, ()=>{});     
      }
});

async function sendToGpt(command,text){
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer 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");

        var raw = JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                "role": "user",
                "content": command + " : " + text
                }
            ],
            "temperature": 0.7
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        var response = await fetch("https://api.openai.com/v1/chat/completions", requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
      
        const data = await response.json(); 

        return data.choices[0].message.content;

    } catch (error) {
        console.error(error);
    }
    
}