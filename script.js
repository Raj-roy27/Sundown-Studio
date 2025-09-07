const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});

function page3Effect() {
  let elemContainer = document.querySelector(".elem-container");
  let fixedImg = document.querySelector(".fixed-image");

  elemContainer.addEventListener("mouseenter", () => {
    fixedImg.style.display = "block";
  });

  elemContainer.addEventListener("mouseleave", () => {
    fixedImg.style.display = "none";
  });

  let elems = document.querySelectorAll(".featured-list");
  elems.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      let featuredImage = el.getAttribute("data-image");
      fixedImg.style.backgroundImage = `url(${featuredImage})`;
    });
  });
}

function page4Effect() {
  const page4Image = document.querySelector("#page4-img");
  const headings = [
    {
      el: document.querySelector("#design"),
      img: "https://sundown-ivory.vercel.app/page4-1.webp",
    },
    {
      el: document.querySelector("#project"),
      img: "https://sundown-ivory.vercel.app/page4-2.webp",
    },
    {
      el: document.querySelector("#execution"),
      img: "https://sundown-ivory.vercel.app/page4-3.webp",
    }
  ];

  headings.forEach((heading, i) => {
    heading.el.addEventListener("click", () => {
      // Update image
      page4Image.setAttribute("src", heading.img);

      // Update all headings
      headings.forEach((h, j) => {
        if (i === j) {
          h.el.style.right = "2vw";
          h.el.style.color = "#efeae3";
        } else {
          h.el.style.right = "0vw";
          h.el.style.color = "#504a45";
        }
      });
    });
  });
}



page3Effect();
page4Effect();
