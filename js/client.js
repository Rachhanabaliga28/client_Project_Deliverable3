//Dynamic Footer Year - This script dynamically updates the footer to display the current year by Finding the <span id="year"> and inserts the current year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

// Scroll to top button script
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => {
      if (scrollBtn) {
        scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
      }
    });
    scrollBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });