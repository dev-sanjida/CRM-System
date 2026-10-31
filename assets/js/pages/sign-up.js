// Clientra – Sign-up page logic (standalone, not part of the main bundle).
(function () {
  // Password visibility
  const pwInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eye-icon");
  document
    .getElementById("toggle-password")
    ?.addEventListener("click", () => {
      const show = pwInput.type === "password";
      pwInput.type = show ? "text" : "password";
      eyeIcon.className = show
        ? "ph ph-eye-slash text-lg"
        : "ph ph-eye text-lg";
    });

  // Password strength
  const bars = [
    document.getElementById("bar-1"),
    document.getElementById("bar-2"),
    document.getElementById("bar-3"),
    document.getElementById("bar-4"),
  ];
  const strengthLabel = document.getElementById("strength-label");
  const COLORS = ["", "#ef4444", "#f59e0b", "#3b82f6", "#16a34a"];
  const LABELS = ["", "Weak", "Fair", "Good", "Strong"];

  function getStrength(pw) {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  }

  pwInput?.addEventListener("input", () => {
    const val = pwInput.value;
    const score = val ? getStrength(val) : 0;
    bars.forEach((b, i) => {
      b.style.background = i < score ? COLORS[score] : "";
    });
    strengthLabel.textContent = val ? LABELS[score] : "";
    strengthLabel.style.color = COLORS[score];
  });

  // Checkbox
  const termsInput = document.getElementById("terms");
  const termsBox = document.getElementById("terms-box");
  const termsCheck = document.getElementById("terms-check");
  termsInput?.addEventListener("change", () => {
    termsBox.style.background = termsInput.checked
      ? "var(--color-accent)"
      : "";
    termsBox.style.borderColor = termsInput.checked
      ? "var(--color-accent)"
      : "";
    termsCheck.style.opacity = termsInput.checked ? "1" : "0";
  });

  // Form submit
  document.getElementById("signup-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const agreed = termsInput.checked;
    const errorEl = document.getElementById("form-error");
    const errorText = document.getElementById("error-text");

    if (!firstName || !lastName || !email || !password) {
      errorText.textContent = "Please fill in all fields.";
      errorEl.classList.remove("hidden");
      return;
    }
    if (!agreed) {
      errorText.textContent = "Please accept the terms to continue.";
      errorEl.classList.remove("hidden");
      return;
    }
    if (getStrength(password) < 2) {
      errorText.textContent = "Please choose a stronger password.";
      errorEl.classList.remove("hidden");
      return;
    }
    errorEl.classList.add("hidden");
    // Store email for OTP page
    sessionStorage.setItem("Clientra-verify-email", email);
    window.location.href = "otp-verification.html";
  });
})();
