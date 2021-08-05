document.body.onload = bodyAppear;

function bodyAppear() {
  document.getElementById("hero").classList.remove("isgone");
  document.getElementById("hero").classList.add("appear");
}

var socialMedia = document.getElementById("content").childNodes[3];
var another = document.getElementById("content2").childNodes[1];
var smF = (ant = 1);

function showNav() {
  document.getElementById("navigation").classList.remove("closeNav");
  document.getElementById("navigation").classList.add("bringNav");
}

function closeNav() {
  document.getElementById("navigation").classList.remove("bringNav");
  document.getElementById("navigation").classList.add("closeNav");
}

function makeNavBarFadeOut() {
  if (window.scrollY == 15) {
    //do stuff
  } else {
    //do other stuff
  }
}

let words = [
  "Page under construction",
  "Seite im Aufbau",
  "Página en construcción",
  "Pagina in costruzione",
  "Pagina in aanbouw",
  "Página em construção",
];

var i = 0;
setInterval(function () {
  document.getElementById("change").innerHTML = words[i];
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

var scrollArrow = document.getElementById("scrollauto");

window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY,
    windowHeight = window.innerHeight,
    scrollHeight = document.body.scrollHeight;

  var scrollPercent = (scrollTop / (scrollHeight - windowHeight)) * 100;
  /*
  var navFixed = document.getElementById("nav");
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
    if (smF == 2) {
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
    if (ant == 2) {
      ant -= 1;
      another.classList.remove("appear");
      another.classList.add("disappear");
    }
  }
});

// Loader
var btnanimation = document.getElementsByClassName("btnanimation");
var rectangleanimation = document.getElementById("rectangleanimation");
var blackshade = document.getElementById("blackshade");

function closeanim() {
  rectangleanimation.classList.remove("show2anim");
  blackshade.classList.remove("show");
}

function openrectangleanim() {
  rectangleanimation.classList.add("show2anim");
  blackshade.classList.add("show");
}
