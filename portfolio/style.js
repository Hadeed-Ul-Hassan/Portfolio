// ADD ACTIVE CLASS TO LINK///
const navuL= document.getElementById('nav-ul')
const navLi= document.getElementsByClassName('nav-li');

for(let i=0; i<navLi.length; i++){
    navLi[i].addEventListener('click', ()=>{
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//slide to menu section on link clicked//
const links = document.querySelectorAll('.link');
const allContent = document.querySelectorAll('.content');

//if(window.innerWidth > 850){

for(let i=0; i<links.length; i++) {
    links[i].addEventListener('click', (e)=>{
        e.preventDefault();
const filter = e.target.dataset.filter;
console.log(filter);
allContent.forEach((content) => {
if(filter=== "content"){
    content.style.display = "block";

} else if (content.classList.contains(filter)){
    content.style.display = "block"
} else{
    content.style.display = "none"

}
    })
});
};
//}
// SMOOTH SCROLL FOR MOBILE AND TABLET

/*
if(window.innerWidth < 850 ){
links  = document.querySelectorAll(".nav-li ", "a");

for(const link of links){
link.addEventListener("click", smoothScroll)
}
function smoothScroll(e){
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector("href").scrollIntoView({
        behavior: 'smooth'
    })

}

}

*/


// Text Effect 
//Text Array

const dataText= ["Web Developer", "Blogger", "Content Developer", "Developer Advocate"];

document.addEventListener("DOMContentLoaded", typingEffect);

function typingEffect(){



function typewriter(text,i,fnCallback){
    if(i < (text.length)){
document.querySelector(".text-effect").innerHTML = text.substring(0, i+1) +"<span></span>";

// set delay befor next charactor
setTimeout(function(){
    typewriter(text,i+1, fnCallback)
}, 100);
    } else if(typeof fnCallback == "function"){
        setTimeout(fnCallback, 2000)
    }
}

//  Stat typing

function starttextAnimation(i){
    if(typeof dataText[i] == "undefined"){
        setTimeout (function(){
            starttextAnimation(0);
        }, 2000)
    }
    if(i < dataText.length){
        typewriter(dataText[i], i+1, function(){
            starttextAnimation(i + 1);
        })
    }
}
starttextAnimation(0);

}