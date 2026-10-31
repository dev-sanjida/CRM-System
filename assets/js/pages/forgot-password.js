// Clientra – Forgot-password page logic (standalone, not part of the main bundle).
(function () {
  const stepRequest = document.getElementById("step-request");
  const stepSent = document.getElementById("step-sent");
  const sentEmail = document.getElementById("sent-email");

  document.getElementById("forgot-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const errorEl = document.getElementById("form-error");

    if (!email || !email.includes("@")) {
      errorEl.classList.remove("hidden");
      return;
    }
    errorEl.classList.add("hidden");
    sessionStorage.setItem("Clientra-verify-email", email);
    sentEmail.textContent = email;
    stepRequest.classList.add("hidden");
    stepSent.classList.remove("hidden");
  });

  document.getElementById("resend-btn")?.addEventListener("click", () => {
    stepSent.classList.add("hidden");
    stepRequest.classList.remove("hidden");
  });
})();
