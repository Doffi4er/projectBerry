(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    menuOrderBtn: document.querySelector("[data-menu-order]"),
  };

  // ---------- Модальне вікно ----------
  function openModal() {
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  }

  refs.openModalBtns.forEach((btn) => btn.addEventListener("click", openModal));
  refs.closeModalBtn.addEventListener("click", closeModal);

  // ---------- Мобільне меню ----------
  function openMenu() {
    refs.menu.classList.remove("is-hidden");
    refs.openMenuBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    refs.menu.classList.add("is-hidden");
    refs.openMenuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  }

  refs.openMenuBtn.addEventListener("click", openMenu);

  // Сценарій 1: клік по хрестику
  refs.closeMenuBtn.addEventListener("click", closeMenu);

  // Сценарій 2: клік по посиланню в меню
  refs.menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Сценарій 3: клавіша Escape (закриває і меню, і модалку)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!refs.modal.classList.contains("is-hidden")) closeModal();
    else if (!refs.menu.classList.contains("is-hidden")) closeMenu();
  });

  // Бонус: клік по темному фону навколо модалки
  refs.modal.addEventListener("click", (e) => {
    if (e.target === refs.modal) closeModal();
  });

  // Бонус: кнопка «Замовити» у меню — закрити меню і відкрити модалку
  refs.menuOrderBtn.addEventListener("click", () => {
    closeMenu();
    openModal();
  });

  // Бонус: якщо вікно розтягли до десктопу — закрити меню
  window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });
})();
