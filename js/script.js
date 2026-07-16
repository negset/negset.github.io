function lightDarkToggle() {
  const button = document.querySelector("#light-dark-toggle");

  button.children[0].innerText =
    ui("mode") === "light" ? "dark_mode" : "light_mode";

  button.addEventListener("click", () => {
    const current = ui("mode");
    const next = current === "light" ? "dark" : "light";
    ui("mode", next);
    button.querySelector("i").innerText = `${current}_mode`;
  });
}

function scrollTop() {
  const container = document.querySelector("#scroll-top");
  const showPosition = 100;

  addEventListener("scroll", () => {
    if (scrollY > showPosition) {
      container.classList.add("active");
    } else {
      container.classList.remove("active");
    }
  });

  container.querySelector("button").addEventListener("click", () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

lightDarkToggle();
scrollTop();
