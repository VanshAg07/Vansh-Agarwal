
  const hamburger = document.getElementById("hamburger-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  hamburger.addEventListener("click", () => {
    if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "flex";
    }
  });

  // Close the menu when a link is clicked
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      mobileMenu.style.display = "none";
    }
  });

var tl = gsap.timeline()

gsap.from("#pg-2-right h1, h3",{
  opacity: 0,
  y: -150,
  stagger:0.3,
})

gsap.from("img",{
  opacity: 0,
  y: 100,
  delay:0.3,
})

gsap.from("#pg-2-right p",{
  opacity: 0,
  x: 50, 
 delay:0.5,
})

gsap.from("button",{
  opacity: 0,
  y: 150,
  delay:0.6,
})
 