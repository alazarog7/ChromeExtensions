document.addEventListener('mouseup', event => {  
    if(window.getSelection().toString().length){
       let text = window.getSelection().toString();   
       chrome.runtime.sendMessage({message:'summarize-text', content: text}, ()=>{});     
    }
});