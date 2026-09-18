(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }

  // --- JS burger menu ---
  const burgerBtn = document.querySelector("[data-burger]");
  const navMenu = document.querySelector("[data-menu]");
  const menuOverlay = document.querySelector("[data-menu-overlay]");

  function openMenu() {
    navMenu.classList.add("is-open");
    menuOverlay.classList.add("is-open");
    burgerBtn.classList.add("is-active");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    navMenu.classList.remove("is-open");
    menuOverlay.classList.remove("is-open");
    burgerBtn.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
  }

  // Сценарий 1: клик по бургеру (toggle)
  burgerBtn.addEventListener("click", () => {
    navMenu.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  // Сценарий 2: клик по оверлею
  menuOverlay.addEventListener("click", closeMenu);

  // Сценарий 3: клик по пункту меню
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
})();