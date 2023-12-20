import { getAvailablePathsInDir } from './files.js';

var openProjectMenuIsOpen;

setInterval(()=>{
    // update variables
    openProjectMenuIsOpen = false ? document.querySelector('.popup-prompt').hidden : false;
},0);

document.querySelector('.open-a-project').addEventListener('click', async (e) => {
    var directory = window.prompt("Which directory would you like to open?","/home/pi");
    const dir = await getAvailablePathsInDir(directory, true);
    console.log(
        dir
    );

    if (dir.error && dir.error.toLowerCase() != "path not specified") {
        document.querySelector('.popup-prompt').hidden = false;
        document.querySelector('.popup-prompt ul').innerHTML = null;
        document.querySelector('.popup-prompt ul').insertAdjacentHTML('beforeend', `<li>The directory specified is invalid or does not exist. (maybe GPiO Playground cannot view this directory?)</li>`);
    } else {
        document.querySelector('.popup-prompt').hidden = false;
        document.querySelector('.popup-prompt ul').innerHTML = null;
        dir.forEach(element => {
            document.querySelector('.popup-prompt ul').insertAdjacentHTML('beforeend', `<li>${element.name}${element.is == "directory" ? "/" : ""}</li>`);
            console.log("rendered element: "+element)
        });
    }
});

var CTRL = false;
var ALT = false;
var SHIFT = false;

window.addEventListener('keydown', async (e) => {
    if (e.key.toLowerCase() === "control") {
        CTRL = true;
    } else if (e.key.toLowerCase() === "alt") {
        ALT = true;
    } else if (e.key.toLowerCase() === "shift") {
        SHIFT = true;
    } else {}

    e.preventDefault();
    if (e.key.toLowerCase().includes('esc')) {
        document.querySelector('.popup-prompt').hidden = true;
    }
    if (CTRL && e.key.toLowerCase() === "o") {
        if (!openProjectMenuIsOpen) {
            document.querySelector('.open-a-project').click();
        }
    }
});

window.addEventListener('keyup', async (e) => {
    if (e.key.toLowerCase() === "control") {
        CTRL = false;
    } else if (e.key.toLowerCase() === "alt") {
        ALT = false;
    } else if (e.key.toLowerCase() === "shift") {
        SHIFT = false;
    } else {}
});

window.addEventListener('contextmenu', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const contextmenu = document.querySelector('contextmenu');
    e.preventDefault();
});