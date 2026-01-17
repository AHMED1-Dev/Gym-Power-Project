// level selection
const BeginnerBtn = document.getElementById("Beginner");
const IntermediateBtn = document.getElementById("Intermediate");
const AdvancedBtn = document.getElementById("Advanced");

const boxBeginner = document.querySelector(".box-Beginner");
const boxIntermediate = document.querySelector(".box-Intermediate");
const boxAdvanced = document.querySelector(".box-Advanced");

// day selection in Beginner
let dayOne = document.querySelectorAll("#day-One");
let dayTwo = document.querySelectorAll("#day-Two");
let dayThree = document.querySelectorAll("#day-three");

let DayOneSection = document.getElementById("DayOne");
let DayTwoSection = document.getElementById("DayTwo");
let DayThreeSection = document.getElementById("DayThree");

// DayOne in the Intermediate
let dayOneIntermediate = document.querySelectorAll("#day-One-Intermediate");
let dayTwoIntermediate = document.querySelectorAll("#day-Two-Intermediate");
let dayThreeIntermediate = document.querySelectorAll("#day-three-Intermediate");

let DayOneSectionIntermediate = document.getElementById("DayOneIntermediate");
let DayTwoSectionIntermediate = document.getElementById("DayTwoIntermediate");
let DayThreeSectionIntermediate = document.getElementById(
  "DayThreeIntermediate",
);

// DayOne in the Advanced
let dayOneAdvanced = document.querySelectorAll("#day-One-Advanced");
let dayTwoAdvanced = document.querySelectorAll("#day-Two-Advanced");
let dayThreeAdvanced = document.querySelectorAll("#day-three-Advanced");

let DayOneSectionAdvanced = document.getElementById("DayOneAdvanced");
let DayTwoSectionAdvanced = document.getElementById("DayTwoAdvanced");
let DayThreeSectionAdvanced = document.getElementById("DayThreeAdvanced");

// زر البداية
document.getElementById("startBtn").onclick = function () {
  alert("Let's Start Training 💪🔥");
};

// عند الضغط على أي تمرين يظهر الاسم
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    alert("Exercise: " + card.querySelector("h3").textContent);
  });
});

const menuToggle = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
    navbar.style.flexDirection = "column";
  }
});

// about

const about = document.getElementById("About");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    about.classList.add("show");
  }
});

// level selection

function showlevel(level) {
  if (level === "Beginner") {
    boxBeginner.style.display = "block";
    boxAdvanced.style.display = "none";
    boxIntermediate.style.display = "none";

    DayOneSection.style.display = "none"; //
    DayTwoSection.style.display = "none"; //
    DayThreeSection.style.display = "none"; //

    DayOneSectionIntermediate.style.display = "none";
    DayTwoSectionIntermediate.style.display = "none";
    DayThreeSectionIntermediate.style.display = "none";

    DayOneSectionAdvanced.style.display = "none";
    DayTwoSectionAdvanced.style.display = "none";
    DayThreeSectionAdvanced.style.display = "none";

    BeginnerBtn.classList.add("active");
    AdvancedBtn.classList.remove("active");
    IntermediateBtn.classList.remove("active");
  } else if (level === "Advanced") {
    boxBeginner.style.display = "none";
    boxAdvanced.style.display = "block";
    boxIntermediate.style.display = "none";

    DayOneSection.style.display = "none";
    DayTwoSection.style.display = "none";
    DayThreeSection.style.display = "none";

    DayOneSectionIntermediate.style.display = "none";
    DayTwoSectionIntermediate.style.display = "none";
    DayThreeSectionIntermediate.style.display = "none";

    DayOneSectionAdvanced.style.display = "none"; //
    DayTwoSectionAdvanced.style.display = "none"; //
    DayThreeSectionAdvanced.style.display = "none"; //

    BeginnerBtn.classList.remove("active");
    AdvancedBtn.classList.add("active");
    IntermediateBtn.classList.remove("active");
  } else if (level === "Intermediate") {
    boxBeginner.style.display = "none";
    boxAdvanced.style.display = "none";
    boxIntermediate.style.display = "block";

    DayOneSection.style.display = "none";
    DayTwoSection.style.display = "none";
    DayThreeSection.style.display = "none";

    DayOneSectionIntermediate.style.display = "none"; //
    DayTwoSectionIntermediate.style.display = "none"; //
    DayThreeSectionIntermediate.style.display = "none"; //

    DayOneSectionAdvanced.style.display = "none";
    DayTwoSectionAdvanced.style.display = "none";
    DayThreeSectionAdvanced.style.display = "none";

    IntermediateBtn.classList.add("active");
    BeginnerBtn.classList.remove("active");
    AdvancedBtn.classList.remove("active");
  }
}

BeginnerBtn.addEventListener("click", () => {
  showlevel("Beginner");
});
AdvancedBtn.addEventListener("click", () => {
  showlevel("Advanced");
});
IntermediateBtn.addEventListener("click", () => {
  showlevel("Intermediate");
});

showlevel("Beginner");

// day selection in Beginner
function showday(section, activeDay) {
  // if (DayOneSection) DayOneSection.style.display = "none";
  // if (DayTwoSection) DayTwoSection.style.display = "none";
  // if (DayThreeSection) DayThreeSection.style.display = "none";
  // او عملت اللي فوق زاي اللي تحت
  [DayOneSection, DayTwoSection, DayThreeSection].forEach((sec) => {
    sec.style.display = "none";
  });

  if (section) {
    section.style.display = "block";
  }

  document.querySelectorAll("#day-One, #day-Two, #day-three").forEach((day) => {
    day.classList.remove("active");
  });
  activeDay.forEach((day) => {
    day.classList.add("active");
  });

  dayOne.forEach((one) => {
    one.addEventListener("click", () => {
      showday(DayOneSection, dayOne);
    });
  });

  dayTwo.forEach((Two) => {
    Two.addEventListener("click", () => {
      showday(DayTwoSection, dayTwo);
    });
  });

  dayThree.forEach((Three) => {
    Three.addEventListener("click", () => {
      showday(DayThreeSection, dayThree);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showday(null, []);
});

// DayOne in the Intermediate
function showdayIntermediate(section, activeDay) {
  [
    DayOneSectionIntermediate,
    DayTwoSectionIntermediate,
    DayThreeSectionIntermediate,
  ].forEach((sec) => {
    sec.style.display = "none";
  });

  if (section) {
    section.style.display = "block";
  }

  document
    .querySelectorAll(
      "#day-One-Intermediate, #day-Two-Intermediate, #day-three-Intermediate",
    )
    .forEach((day) => {
      day.classList.remove("active");
    });

  activeDay.forEach((day) => {
    day.classList.add("active");
  });

  dayOneIntermediate.forEach((one) => {
    one.addEventListener("click", () => {
      showdayIntermediate(DayOneSectionIntermediate, dayOneIntermediate);
    });
  });
  dayTwoIntermediate.forEach((two) => {
    two.addEventListener("click", () => {
      showdayIntermediate(DayTwoSectionIntermediate, dayTwoIntermediate);
    });
  });
  dayThreeIntermediate.forEach((three) => {
    three.addEventListener("click", () => {
      showdayIntermediate(DayThreeSectionIntermediate, dayThreeIntermediate);
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  showdayIntermediate(null, []);
});

// DayOne in the Advanced

function showdayAdvanced(section, activeDay) {
  [
    DayOneSectionAdvanced,
    DayTwoSectionAdvanced,
    DayThreeSectionAdvanced,
  ].forEach((sec) => {
    sec.style.display = "none";
  });

  if (section) {
    section.style.display = "block";
  }

  document
    .querySelectorAll(
      "#day-One-Advanced, #day-Two-Advanced, #day-three-Advanced",
    )
    .forEach((day) => {
      day.classList.remove("active");
    });

  activeDay.forEach((day) => {
    day.classList.add("active");
  });

  dayOneAdvanced.forEach((one) => {
    one.addEventListener("click", () => {
      showdayAdvanced(DayOneSectionAdvanced, dayOneAdvanced);
    });
  });
  dayTwoAdvanced.forEach((two) => {
    two.addEventListener("click", () => {
      showdayAdvanced(DayTwoSectionAdvanced, dayTwoAdvanced);
    });
  });
  dayThreeAdvanced.forEach((three) => {
    three.addEventListener("click", () => {
      showdayAdvanced(DayThreeSectionAdvanced, dayThreeAdvanced);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showdayAdvanced(null, []);
});

// Schedule
const scrollRevealOption = {
  distance: "80px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".Schedule table", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".plan", {
  ...scrollRevealOption,
  interval: 500,
});
