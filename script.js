const img = document.querySelectorAll('.skills'); 
let skillText = document.querySelector('.skilltext');


img.forEach(element => {
    element.addEventListener('mouseover', e => {
        let alttext = e.target.getAttribute('alt'); 
        skillText.innerHTML = 'I have experience with: ' + alttext; 
        });
}); 

img.forEach (element => {
    element.addEventListener("mouseleave", event => {
    skillText.innerHTML = ''
    }); 
});
