
//Skills homepage - alt text appears on hovering logos//
const img = document.querySelectorAll('.skills'); 
let skillText = document.querySelector('.skilltext');


img.forEach(element => {
    element.addEventListener('mouseover', e => {
        let alttext = e.target.getAttribute('alt'); 
        skillText.innerHTML = alttext; 
        });
}); 

img.forEach (element => {
    element.addEventListener("mouseleave", event => {
    skillText.innerHTML = ''
    }); 
});

//Portfolio page - collapsible//

function readMore() {
    let dots = document.querySelector('.dots')
    let moreText = document.querySelector('.more'); 
    let btnText = document.querySelector('.collBtn'); 

    if (dots.style.display === "none") {
        dots.style.display = "inline"; 
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none"; 
    } else {
        dots.style.display = "none"; 
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline"; 
    }
};


