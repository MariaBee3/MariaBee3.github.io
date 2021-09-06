
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

/*
var btn = document.querySelectorAll(".collBtn");
   
        btn[0].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.previousElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block"; 
                this.innerHTML = "Read less"; 
            }
        });
*/

var btn = document.querySelectorAll(".collBtn");
   
        btn.forEach(button => {
            button.addEventListener("click", function () {
            button.classList.toggle("active");
            var content = button.previousElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block"; 
                button.innerHTML = "Read less"; 
            }
        })
    }); 


/*
document.querySelectorAll('.collBtn').forEach(button => {
    button.addEventListener("click", function () {
        button.classList.toggle("active");
        var content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block"
            btn.innerHTML = "Read less";
        }
    });
    })
})
*/  

/*Deze code is ook optie om panel naar beneden te laten schuiven. Werkte echter nog niet. 
document.querySelectorAll('.collBtn').forEach(button => {
    button.addEventListener('click', () => {
        const panel = button.nextElementSibling; 

        button.classList.toggle('collBtn--active'); 

        if (button.classList.contains('collBtn--active')) {
            panel.getElementsByClassName.maxHeight = panel.scrollHeight + 'px'; 
        } else {
            panel.getElementsByClassName.maxHeight = 0; 
        }
    })
})
*/


