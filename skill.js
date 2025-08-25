// Animate progress bars on scroll
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress span");

  const showProgress = () => {
    progressBars.forEach(bar => {
      const value = bar.getAttribute("data-progress");
      bar.style.width = value + "%";
    });
  };

  // Trigger animation when section is visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showProgress();
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".skills-category").forEach(category => {
    observer.observe(category);
  });
});
