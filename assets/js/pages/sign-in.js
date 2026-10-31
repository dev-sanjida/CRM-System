// Clientra – Sign-in page logic (standalone, not part of the main bundle).
(function () {
  // Password toggle
  const pwInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");
  document
    .getElementById("toggle-password")
    ?.addEventListener("click", () => {
      const isHidden = pwInput.type === "password";
      pwInput.type = isHidden ? "text" : "password";
      eyeIcon.className = isHidden
        ? "ph ph-eye-slash text-lg"
        : "ph ph-eye text-lg";
    });

  // Custom checkbox visual sync
  const cb = document.getElementById("remember");
  if (cb) {
    const cbSpan = cb.nextElementSibling;
    const cbIcon = cbSpan.querySelector("i");
    cb.addEventListener("change", () => {
      cbIcon.style.opacity = cb.checked ? "1" : "0";
      cbSpan.style.background = cb.checked ? "var(--color-accent)" : "";
      cbSpan.style.borderColor = cb.checked ? "var(--color-accent)" : "";
    });
  }

  // Form submit demo
  document.getElementById("signin-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorEl = document.getElementById("form-error");
    if (!email || !password) {
      errorEl.classList.remove("hidden");
      document.getElementById("form-error-text").textContent =
        "Please fill in all fields.";
      return;
    }
    errorEl.classList.add("hidden");
    // On success → redirect
    window.location.href = "index.html";
  });
})();
