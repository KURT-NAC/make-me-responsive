/**
 *
 */
document.addEventListener('click', function (event) {

}, false);

function handleclick() {
    document.write("Clicked");
    return false;
}

let link = document.getElementById('changedLink');
if (typeof window.addEventListener != "undefined") {
    link.addEventListener("click",handleclick,false);
} else {
    link.attachEvent("onclick",handleclick);
}