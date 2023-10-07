// let body =  document.getElementsByTagName("body");
// body[0].style.setProperty('background-color','black','important')

// let ps = document.getElementsByTagName("p");

// for (const element of ps) {
//     element.style.setProperty('color','white','important')
// }
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.command === "change-tab"){
            let body =  document.getElementsByTagName("body");
            body[0].style.setProperty('background-color','black','important')

            let ps = document.getElementsByTagName("p");

            for (const element of ps) {
                element.style.setProperty('color','white','important')
            }
        }
    }
)