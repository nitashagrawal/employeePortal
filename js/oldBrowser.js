// CHECK BROWSER STATUS

//Implement body on load logic here, document.write('oldBrowser')
function checkBrowser() {
    if (document.getElementById && document.attachEvent) {
        // IE specific attachevent
    } else if (document.getElementById) {
        //modern browsers
    } else {
        //send them off 
        window.location = "../view/oldBrowser.html";
    }
}