function toggleDarkMode() {
    var bodyElement = document.getElementById("mainBackground")
    var darkModeBtnElement = document.getElementById("darkModeButton")
    var textElement = document.getElementsByClassName("text")
    console.log(darkModeBtnElement);
    
    // if it's in dark mode, change it to light mode
    // what does dark mode look like here?
    // dark mode looks like a black background and the button will say Change to Light Mode
    if (bodyElement.style.background == "black") {
        bodyElement.style.background = " #77c3ec"
        darkModeBtnElement.innerHTML="Change to Dark Mode"
        for (var i = 0; i<textElement.length; i++) {
            textElement[i].style.color = "black"
        }
   // if it's in light mode, change it to dark mode
    // what does light mode look like here?
    // light mode looks like a tan background and the button will say Change to Dark Mode
    } else {
        bodyElement.style.background = "black"
        darkModeBtnElement.innerHTML="Change to Light Mode"
        console.log(textElement)
        for (var i = 0; i<textElement.length; i++) {
            textElement[i].style.color = "blue"
        }
    }
}