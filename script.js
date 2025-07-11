console.log("Website loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const mainContent = document.getElementById("mainContent");
  const enterBtn = document.getElementById("enterBtn");

  // Set initial visibility
  splash.style.display = "flex";
  mainContent.style.display = "block"; // Make it exist from start
  mainContent.classList.remove("show"); // But keep hidden

  function enterSite() {
    splash.classList.add("fade-out");
    mainContent.classList.add("show"); // Start fading in main content

    setTimeout(() => {
      splash.style.display = "none";
    }, 1200); // match the zoom-out duration
  }

  // Button click
  enterBtn.addEventListener("click", enterSite);

  // Enter key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && splash.style.display !== "none") {
      enterSite();
    }
  });
});



// IST Clock logic
    function updateISTClock() {
      const now = new Date();
      const hours = now.getHours();  // 24-hour format
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}


    // Paris Clock logic
    function updateParisClock() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false, // 24-hour format
    timeZone: "Europe/Paris"
  }).formatToParts(now);

  const timeData = {};
  parts.forEach(p => {
    if (p.type !== "literal") timeData[p.type] = p.value;
  });

  document.getElementById('eu-hours').textContent = timeData.hour.padStart(2, '0');
  document.getElementById('eu-minutes').textContent = timeData.minute.padStart(2, '0');
  document.getElementById('eu-seconds').textContent = timeData.second.padStart(2, '0');
}

function updateUSClock() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: "America/New_York"
  }).formatToParts(now);

  const timeData = {};
  parts.forEach(p => {
    if (p.type !== "literal") timeData[p.type] = p.value;
  });

  document.getElementById('us-hours').textContent = timeData.hour.padStart(2, '0');
  document.getElementById('us-minutes').textContent = timeData.minute.padStart(2, '0');
  document.getElementById('us-seconds').textContent = timeData.second.padStart(2, '0');
}

function updateAustraliaClock() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: "Australia/Sydney"
  }).formatToParts(now);

  const timeData = {};
  parts.forEach(p => {
    if (p.type !== "literal") timeData[p.type] = p.value;
  });

  document.getElementById('aus-hours').textContent = timeData.hour.padStart(2, '0');
  document.getElementById('aus-minutes').textContent = timeData.minute.padStart(2, '0');
  document.getElementById('aus-seconds').textContent = timeData.second.padStart(2, '0');
}


    // Start both clocks
    updateISTClock();
    updateParisClock();
    updateUSClock();
    updateAustraliaClock();

setInterval(() => {
  updateISTClock();
  updateParisClock();
  updateUSClock();
  updateAustraliaClock();
}, 1000);


