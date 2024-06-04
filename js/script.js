var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sections = ["header", "about", "services", "portfolio", "contact"];
var currentSectionIndex = 0;
var lastScrollTime = Date.now();

var nextSection1 = document.getElementById(sections[currentSectionIndex]);
nextSection1.scrollIntoView({ behavior: "smooth" });

function scrollToAbout(tabname2) {
  var homeSection = document.getElementById(sections[tabname2]);
  homeSection.scrollIntoView({ behavior: "smooth" });
  currentSectionIndex = tabname2;
  closemenu();
  console.log(currentSectionIndex);
}

var indexDayLightToggle = 0;

function btnDayNight() {
  var icon = document.getElementById("day-mode-toggle");

  if (indexDayLightToggle == 0) {
    toggleLightMode();
  } else if (indexDayLightToggle == 1) {
    toggleDarkMode();
  }

  if (
    icon.querySelector("i").classList.contains("fa-regular") &&
    icon.querySelector("i").classList.contains("fa-sun")
  ) {
    // Change class to "fa-light fa-moon"
    icon.querySelector("i").classList.remove("fa-regular", "fa-sun");
    icon.querySelector("i").classList.add("fa-regular", "fa-moon");
  } else {
    // Change class back to "fa-regular fa-sun"
    icon.querySelector("i").classList.remove("fa-regular", "fa-moon");
    icon.querySelector("i").classList.add("fa-regular", "fa-sun");
  }
}

function toggleDarkMode() {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");

  indexDayLightToggle = 0;
}

function toggleLightMode() {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");

  indexDayLightToggle = 1;
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// Function to handle keypress events

document.addEventListener("DOMContentLoaded", function () {
  var stateofscroll = 0;

  console.log("initial index - " + currentSectionIndex);
  // Function to scroll to the next section
  function scrollToNextSection() {
    if (stateofscroll == 0) {
      if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        console.log(currentSectionIndex);
        var nextSection = document.getElementById(
          sections[currentSectionIndex]
        );
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // Function to scroll to the previous section
  function scrollToPrevSection() {
    if (stateofscroll == 0) {
      if (currentSectionIndex > 0) {
        currentSectionIndex--;
        console.log(currentSectionIndex);
        var prevSection = document.getElementById(
          sections[currentSectionIndex]
        );
        prevSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  // Listen to scroll events
  window.addEventListener("wheel", function (event) {
    event.preventDefault(); // Prevent default scrolling behavior

    var currentTime = Date.now();
    var timeDiff = currentTime - lastScrollTime;

    // Only allow scrolling every 500 milliseconds to prevent rapid scrolling
    if (timeDiff < 500) {
      return;
    }

    if (event.deltaY > 0) {
      scrollToNextSection();
    } else {
      scrollToPrevSection();
    }

    lastScrollTime = currentTime;
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowDown") {
      scrollToNextSection();
    } else if (event.key === "ArrowUp") {
      scrollToPrevSection();
    }
  });

  function adjustOverflow() {
    var isAndroid = /Android/i.test(navigator.userAgent);
    var isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (isAndroid || isSmallScreen) {
      stateofscroll = 1;
      if (stateofscroll == 1) {
        document.body.style.overflowY = "scroll";
      }
    } else {
      stateofscroll = 0;
      document.body.style.overflow = "hidden";
    }
  }

  // Call the adjustOverflow function on page load and window resize
  adjustOverflow();
  window.addEventListener("resize", adjustOverflow);
});

// Function to check if an element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll events
function handleScroll() {
  var aboutSection = document.getElementById("about");
  var aboutCol1 = document.querySelector(".about-col-1");
  var aboutCol2 = document.querySelector(".about-col-2");

  if (isInViewport(aboutSection)) {
    aboutCol1.classList.add("animated");
    aboutCol2.classList.add("animated");
  }
}

// Listen to scroll events
window.addEventListener("scroll", handleScroll);
