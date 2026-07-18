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

// About section animation
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    document.getElementById("About").classList.add("show");
  }
});

// --- Active Level (currently selected) ---
document.querySelectorAll("[data-level-btn]").forEach((btn) => {
  btn.addEventListener("click", () => {
    // const level = btn.dataset.levelBtn;
    const level = btn.getAttribute("data-level-btn");
    console.log(level);

    // Toggle active class on buttons
    document
      .querySelectorAll("[data-level-btn]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show correct workout box, hide others
    document
      .querySelectorAll("[data-level-box]")
      .forEach((box) => box.classList.remove("visible"));
    document
      .querySelector(`[data-level-box="${level}"]`)
      .classList.add("visible");

    // Hide all day sections
    document
      .querySelectorAll("[data-day-section]")
      .forEach((section) => section.classList.remove("visible"));
  });
});

// --- Day Selection ---
document.addEventListener("click", (e) => {
  const dayItem = e.target.closest("[data-day][data-level]");
  console.log(dayItem);
  if (!dayItem) return;

  // const day = dayItem.dataset.day;
  const day = dayItem.getAttribute("data-day");
  // const level = dayItem.dataset.level;
  const level = dayItem.getAttribute("data-level");
  console.log(day, level);

  // إخفاء كل sections الـ level ده
  document
    .querySelectorAll(`[data-day-section][data-level="${level}"]`)
    .forEach((sec) => sec.classList.remove("visible"));

  // إظهار الـ section المطلوب
  const target = document.querySelector(
    `[data-day-section="${day}"][data-level="${level}"]`,
  );
  console.log(target);
  if (target) {
    target.classList.add("visible");
    // scroll للـ section
    setTimeout(
      () => target.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  }

  // Active class على الـ day item
  document
    .querySelectorAll(`[data-day][data-level="${level}"]`)
    .forEach((li) => li.classList.remove("active"));
  dayItem.classList.add("active");
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

function sendToWhatsApp(planName = "") {
  const msg = `🏋️ *GYM POWER*
${planName ? `📦 Plan: ${planName}` : ""}
📅 Date: ${new Date().toLocaleDateString("en-EG")}
🌐 Page: ${document.title}
---
I want to book now 🙌`;

  window.open(
    `https://wa.me/201113650935?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}
