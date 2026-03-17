console.log("Website loaded!");



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


const modal = document.getElementById("pdfModal");
const viewer = document.getElementById("pdfViewer");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".deck-card").forEach(card => {
  card.addEventListener("click", () => {
    const pdfPath = card.getAttribute("data-pdf");

    viewer.src = pdfPath + "#toolbar=0&navpanes=0&scrollbar=0";
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  viewer.src = "";
});