let themes = {
    dark:{
        background: "black",
        paragraph: "white"
    },
    light:{
        background: "white",
        paragraph: "black",
    },
    green:{
        background: "green",
        paragraph: "yellow",
    },
    blue:{
        background: "blue",
        paragraph: "yellow",
    }
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        changeTheme(request.theme)
    }
)

function changeTheme(theme){
    let themeSelected = themes[theme];
    let body =  document.getElementsByTagName("body");
    body[0].style.setProperty('background-color',themeSelected["background"],'important')

    let ps = document.getElementsByTagName("p");

    for (const element of ps) {
        element.style.setProperty('color',themeSelected["paragraph"],'important')
    }
}

