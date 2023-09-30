const element = new DOMParser();

let button =`
    <div>
        <button id="theme-switch">Dark</button>
    </div>
`;

let buttonHTML = element.parseFromString(button,'text/html');

document.getElementsByTagName('body')[0].appendChild(buttonHTML.body);

document.getElementById('theme-switch').addEventListener('click', function(e){
    let theme = document.getElementById('theme-switch').textContent;

    let body = document.getElementsByTagName('body')[0];
    body.style.setProperty('background-color','black', 'important');
    
    let title = document.querySelectorAll('h1, h4, p, li, a');
    for (const element of title) {
        if(['h1','h4','p','li'].filter(e => e == element.tagName.toLowerCase()).length){
            element.style.setProperty('color','white','important');
        } 
        
        if(element.tagName.toLowerCase() == 'a' && element.getAttribute('href') && element.getAttribute('href').includes('razon.com')){
            let pattern = /^Lea/;
            if(pattern.test(element.parentElement.outerText)){
                element.style.setProperty('color','#ffc1c8','important');
            } else {
                element.style.setProperty('color','white','important');    
            }
        }
        else {
            element.style.setProperty('color','white','important');
        }
    }
});
