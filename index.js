let hbg = document.querySelector(".hamburger");
let nvList = document.querySelector(".nav-list");
let emdidi = document.getElementById("emdidi");
let heroW = document.querySelector(".hero-wrapper");
let body = document.querySelector(".body");


let displayNavList = function (event) {
    hbg.classList.toggle("active");
    nvList.classList.toggle("active");
    // emdidi.addEventListener("click", (e)=>{
    //   e.preventDefault();  
    // }); 
    heroW.addEventListener("click", (a)=>{
        a.preventDefault();
    })

    body.addEventListener("keydown", (e)=>{
        e.defaultPrevented();
    })



}

hbg.addEventListener("click",displayNavList );
