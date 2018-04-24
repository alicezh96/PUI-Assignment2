/* AOS*/


/* Open Home Page onClick */
function openHome() {
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("poster").style.display = "none";
    document.getElementById("meal").style.display = "none";

}


/* Open About Page onClick */
function openAbout() {
    document.getElementById("about").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("poster").style.display = "none";
    document.getElementById("dm").style.display = "none";


    document.getElementById("linkabout").style.color = CornflowerBlue;

}

/* Open Portfolio Page onClick */
function openPortfolio() {
    document.getElementById("about").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("poster").style.display = "none";

    document.getElementById("dm").style.display = "none";



    document.getElementById("linkportfolio").style.color = CornflowerBlue;
}



function Poster() {
    document.getElementById("poster").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
}


function DM() {
    document.getElementById("dm").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
}
