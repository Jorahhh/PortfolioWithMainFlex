


//Using this to correct the viewport height
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});



/*HAMBURGER MENU*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))





/*About Section*/


const plusIcon = document.getElementById("plus");
const aboutActive = document.getElementById('about_overlay');


plusIcon.addEventListener("click", () =>{
    plusIcon.classList.toggle('active')
    if(plusIcon.classList.contains('active')){
        aboutActive.classList.toggle('active')
    }else {
        aboutActive.classList.remove('active')
    }

})




