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

const about = document.getElementById("about");
function scrollToAboutFunction() {
  about.scrollIntoView({ behavior: "smooth" });
  currentSectionIndex++;
}

function scrollToAbout(tabname2) {
  var homeSection = document.getElementById(sections[tabname2]);
  homeSection.scrollIntoView({ behavior: "smooth" });
  currentSectionIndex = tabname2;

  closemenu();
  console.log(currentSectionIndex);

  // Check if currentSectionIndex equals 4
}
//Dark/Light Mode
var indexDayLightToggle = 0;

// Function to toggle between dark mode and light mode
function btnDayNight() {
  var icon = document.getElementById("day-mode-toggle");

  if (indexDayLightToggle === 0) {
    toggleLightMode();
  } else {
    toggleDarkMode();
  }
  closemenu();

  // Toggle icon class between fa-sun and fa-moon
  toggleIconClass(icon);

  // Save the current mode preference to localStorage
  saveModePreference(indexDayLightToggle);
}

// Function to toggle icon class between fa-sun and fa-moon
function toggleIconClass(icon) {
  if (indexDayLightToggle === 0) {
    // Change class to "fa-regular fa-moon"
    icon.querySelector("i").classList.remove("fa-regular", "fa-sun");
    icon.querySelector("i").classList.add("fa-regular", "fa-moon");
  } else {
    // Change class back to "fa-regular fa-sun"
    icon.querySelector("i").classList.remove("fa-regular", "fa-moon");
    icon.querySelector("i").classList.add("fa-regular", "fa-sun");
  }
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");

  indexDayLightToggle = 0;
}

// Function to toggle light mode
function toggleLightMode() {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");

  indexDayLightToggle = 1;
}

// Function to save mode preference to localStorage
function saveModePreference(modeIndex) {
  localStorage.setItem("modePreference", modeIndex);
}

// Function to load mode preference from localStorage
function loadModePreference() {
  var savedMode = localStorage.getItem("modePreference");
  if (savedMode === "1") {
    toggleLightMode();
  } else {
    toggleDarkMode();
  }
}

// On initial page load, load the mode preference if it exists
document.addEventListener("DOMContentLoaded", function () {
  loadModePreference();
});
//EndofDark/Mode

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// Function to handle keypress events
/**
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
    var userAgent = navigator.userAgent.toLowerCase();
    var isAndroid = userAgent.indexOf("android") > -1;
    var isiOS = /iphone/.test(userAgent);

    if (isAndroid || isiOS) {
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
});*/

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



function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to add animation class when element is in viewport
function addAnimationOnScroll() {
  const animatedElements = document.querySelectorAll('.animated-element');
  const headerText = document.querySelector('.header-text'); // Selecting the header text element

  function animateElements(elements) {
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  }

  function animateHeaderText() {
    if (isInViewport(headerText)) {
      headerText.classList.add('active');
    }
  }

  window.addEventListener('scroll', function() {
    animateElements(animatedElements);
    animateHeaderText(); // Call the function to animate header text on scroll
  });

  // Trigger once on page load if elements are already in view
  animateElements(animatedElements);
  animateHeaderText(); // Trigger header text animation once on page load
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  addAnimationOnScroll();
});



// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to add animation class when element is in viewport
function addAnimationOnScroll() {
  const animatedTextElements = document.querySelectorAll('.animated-text');
  const animatedButtonElements = document.querySelectorAll('.animated-button');
  const animatedAboutCol1 = document.querySelector('.about-col-1'); // Selecting the .about-col-1 element
  const animatedAboutCol2 = document.querySelector('.about-col-2'); // Selecting the .about-col-2 element

  function animateElements(elements) {
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  }

  function animateAboutCol1() {
    if (animatedAboutCol1 && isInViewport(animatedAboutCol1)) {
      animatedAboutCol1.classList.add('active');
    }
  }

  function animateAboutCol2() {
    if (animatedAboutCol2 && isInViewport(animatedAboutCol2)) {
      animatedAboutCol2.classList.add('active');
    }
  }

  window.addEventListener('scroll', function() {
    animateElements(animatedTextElements);
    animateElements(animatedButtonElements);
    animateAboutCol1(); // Trigger animation for .about-col-1 on scroll
    animateAboutCol2(); // Trigger animation for .about-col-2 on scroll
  });

  // Trigger once on page load if elements are already in view
  animateElements(animatedTextElements);
  animateElements(animatedButtonElements);
  animateAboutCol1(); // Trigger .about-col-1 animation once on page load
  animateAboutCol2(); // Trigger .about-col-2 animation once on page load
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  addAnimationOnScroll();
});
