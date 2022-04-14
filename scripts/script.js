const socialMedia = document.getElementById("content").childNodes[3];
const another = document.getElementById("content2").childNodes[1];
let smF = (ant = 1);

const header = document.getElementById("header");

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.height = "56px";
  } else {
    header.style.height = "70px";
  }
});

let menu = document.getElementById("menu");

function showNav() {
  menu.classList.remove("closeNav");
  menu.classList.add("bringNav");
}

function closeNav() {
  menu.classList.remove("bringNav");
  menu.classList.add("closeNav");
}

const words = [
  "Page under construction",
  "Page en construction",
  "Seite im Aufbau",
  "Página en construcción",
  "Pagina in costruzione",
  "Pagina in aanbouw",
  "Página em construção",
];

var i = 0;
setInterval(function () {
  document.getElementById("change").textContent = words[i];
  if (i >= words.length - 1) {
    i = 0;
  } else {
    i++;
  }
}, 500);

function showSecondPart() {
  content2 = document.getElementById("content2");
  if (window.scrollY >= 306) {
    content2.classList.remove("isgone");
    content2.classList.add("appear");
  } else {
    content2.classList.remove("appear");
    content2.classList.add("isgone");
  }
}

const scrollArrow = document.getElementById("scrollauto");

window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY,
    windowHeight = window.innerHeight,
    scrollHeight = document.body.scrollHeight;

  var scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;
  /*
  var navFixed = document.querySelector("header");
  if (scrollPercent > 0.7) {
    navFixed.classList.add(""); // Ajoute une classe dans laquelle la taille de la barre de navigation augmente avec une transition
    // et la position passe en fixed
  } else {
    navFixed.classList.remove("");
  }
  */
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

  // Social Media
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

// Loader
const btnanimation = document.getElementsByClassName("btnanimation");
const rectangleanimation = document.getElementById("rectangleanimation");
const blackshade = document.getElementById("blackshade");

const closeanim = () => {
  rectangleanimation.classList.remove("show2anim");
  blackshade.classList.remove("show");
};

const openrectangleanim = () => {
  rectangleanimation.classList.add("show2anim");
  blackshade.classList.add("show");
};
