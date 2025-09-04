const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});




function page3Effect(){
    let elemContainer = document.querySelector(".elem-container");
let fixedImg = document.querySelector(".fixed-image");

elemContainer.addEventListener("mouseenter", ()=>{
    fixedImg.style.display="block";
});

elemContainer.addEventListener("mouseleave", ()=>{
    fixedImg.style.display="none";
});

let elems = document.querySelectorAll(".featured-list");
elems.forEach((el)=>{
    el.addEventListener("mouseenter", ()=>{
        let featuredImage = el.getAttribute("data-image")
        fixedImg.style.backgroundImage = `url(${featuredImage})`;
    })
});
}


 page3Effect();