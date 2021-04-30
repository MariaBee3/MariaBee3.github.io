let img = document.getElementById('html');
let alttext = document.getElementById('html').alt; 
let skillText = document.querySelector('.skilltext');



img.addEventListener("mouseover", function(){
        skillText.innerHTML = 'I have experience with: ' + alttext
        }
    );

img.addEventListener("mouseleave", function(){
        skillText.innerHTML = ''
        }
    );
