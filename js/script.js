document.addEventListener('DOMContentLoaded', () => {
  M.Tabs.init(document.querySelector('.tabs'));

  let copyright = document.querySelector(".footer-copyright");
  let year = new Date().getFullYear();
  copyright.textContent = `© ${year} negset`;
});
