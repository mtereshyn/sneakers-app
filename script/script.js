const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

const burger = document.querySelector(".burger");
if (burger) {
  burger.style.display = window.innerWidth < 900 ? "block" : "none";
  window.addEventListener("resize", () => {
    burger.style.display = window.innerWidth < 900 ? "block" : "none";
  });
}
