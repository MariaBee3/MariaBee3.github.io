
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

var btn = document.querySelectorAll(".collBtn");
   
        btn.forEach(button => {
            button.addEventListener("click", function () {
            button.classList.toggle("active");
            var content = button.previousElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
                button.innerHTML = "Read more"
            } else {
                content.style.display = "block"; 
                button.innerHTML = "Read less"; 
            }
        })
    }); 


