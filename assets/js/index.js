$(document).ready(function(){
   
    // typing text animation script
    var typed = new Typed(".titlePost", {
        strings: ["Web Developer.","PHP Developer.", "MERN Developer.", "Web Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".titlePost-2", {
        strings: ["Web Developer.","PHP Developer.", "MERN Developer.", "Web Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
   })


//LET'S GET WHATSAPP MODAL ELEMENT TAG
let whatsAppModal = document.getElementById("whatsAppModal");
let whatsAppModalBtn = document.getElementById("WhatsAppInfo");
let whatsAppModalHideBtn = document.getElementById("WhatsAppInfoHide");

// DISPLAY MODAL FUNCTIOMN BUILD HERE
whatsAppModalBtn.addEventListener("click", function(){
    whatsAppModal.style.display = "block";
    whatsAppModalBtn.setAttribute("id", "hover");
 
});


// HIDE MODAL FUNCTION BUILD HERE

whatsAppModalHideBtn.addEventListener("click", function(){
    whatsAppModal.style.display = "none";
    whatsAppModalBtn.removeAttribute("id", "hover");
    whatsAppModalBtn.setAttribute("id", "WhatsAppInfo");
});


//LET'S GET SKYPE MODAL ELEMENT TAG

let skypeModal = document.getElementById("skypeModal"); 
let skypeModalBtn = document.getElementById("skypeAppInfo");
let skypeModalHideBtn = document.getElementById("skypeInfoHide");


// DISPLAY FUNCTION BUILD HERE
skypeModalBtn.addEventListener("click", function(){
    skypeModal.style.display = "block";
    skypeModalBtn.setAttribute("id", "hover");
});


// HIDE FUNCTION BUILD HERE
skypeModalHideBtn.addEventListener("click", function(){
    skypeModal.style.display = "none";
    skypeModalBtn.removeAttribute("id", "hover");
    skypeModalBtn.setAttribute("id", "skypeAppInfo");

});
