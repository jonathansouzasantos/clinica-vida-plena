"use strict";

// A navegação permanece disponível se o JavaScript estiver desativado.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
if (menuButton && navigation) {
  const setMenu = (open) => {
    navigation.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  };
  menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenu(false);
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  window.matchMedia("(min-width: 761px)").addEventListener("change", () => setMenu(false));
}

const currentYear = document.getElementById("current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

const appointmentForm = document.getElementById("appointment-form");
if (appointmentForm) {
  const nameInput = document.getElementById("nome");
  const feedback = document.getElementById("form-feedback");
  const submitButton = appointmentForm.querySelector('[type="submit"]');
  const validateName = () => {
    nameInput.setCustomValidity(nameInput.value.trim().length < 3 ? "Informe um nome com pelo menos três caracteres, sem contar espaços nas extremidades." : "");
  };
  appointmentForm.addEventListener("input", () => {
    validateName();
    feedback.hidden = true;
  });
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validateName();
    if (!appointmentForm.reportValidity()) return;
    const data = new FormData(appointmentForm);
    feedback.textContent = "Obrigado, " + String(data.get("nome")).trim() + "! A simulação para " + data.get("servico") + ", no período da " + String(data.get("turno")).toLowerCase() + ", foi validada. Nenhum dado foi enviado ou armazenado pelo portal.";
    appointmentForm.reset();
    nameInput.setCustomValidity("");
    feedback.hidden = false;
    feedback.focus({ preventScroll: true });
    feedback.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "nearest" });
  });
  submitButton.disabled = false;
}
