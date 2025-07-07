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
