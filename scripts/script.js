// DOM elements

const header = document.getElementById("header");
const menu = document.getElementById("menu");

const btnanimation = document.getElementsByClassName("btnanimation");
const rectangleanimation = document.getElementById("rectangleanimation");
const blackshade = document.getElementById("blackshade");

const socialMedia = document.getElementById("socialMedia");
const another = document.getElementById("another");

const scrollArrow = document.getElementById("scrollauto");

// Variables
let smF = (ant = 1);

/***************************/

// Header animation
document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.height = "56px";
  } else {
    header.style.height = "70px";
  }
});

// Menu animation
const showNav = () => {
  menu.classList.remove("closeNav");
  menu.classList.add("bringNav");
};

const closeNav = () => {
  menu.classList.remove("bringNav");
  menu.classList.add("closeNav");
};

// Loader
const closeanim = () => {
  rectangleanimation.classList.remove("show2anim");
  blackshade.classList.remove("show");
};

const openrectangleanim = () => {
  rectangleanimation.classList.add("show2anim");
  blackshade.classList.add("show");
};

// Soon
const words = [
  "Page under construction",
  "Page en construction",
  "Seite im Aufbau",
  "Página en construcción",
  "Pagina in costruzione",
  "Pagina in aanbouw",
  "Página em construção",
];

let i = 0;
setInterval(() => {
  document.getElementById("change").textContent = words[i];
  if (i >= words.length - 1) {
    i = 0;
  } else {
    i++;
  }
}, 500);

/***************************/

// Scroll stuff
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY,
    windowHeight = window.innerHeight,
    scrollHeight = document.body.scrollHeight;

  const scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;

  if (scrollPercent > 47.9) {
    scrollArrow.style.display = "block";
  } else {
    scrollArrow.style.display = "none";
  }

  if (scrollPercent > 99) {
    scrollArrow.style.marginBottom = "4rem";
  } else {
    scrollArrow.style.marginBottom = "0px";
  }

  // Social media
  if (scrollPercent > 28 && scrollPercent < 80) {
    socialMedia.classList.remove("isgone");
    socialMedia.classList.add("appear");
    socialMedia.classList.remove("disappear");
    smF = 2;
  } else {
    if (smF === 2) {
      smF -= 1;
      socialMedia.classList.remove("appear");
      socialMedia.classList.add("disappear");
    }
  }

  // Another title
  if (scrollPercent > 70) {
    another.classList.remove("isgone");
    another.classList.add("appear");
    another.classList.remove("disappear");
    ant = 2;
  } else {
    if (ant === 2) {
      ant -= 1;
      another.classList.remove("appear");
      another.classList.add("disappear");
    }
  }
});
