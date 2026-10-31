// Clientra – New-password page logic (standalone, not part of the main bundle).
(function () {
  // Password toggles
  document.querySelectorAll("[data-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const input = document.getElementById(btn.dataset.toggle);
      const icon = btn.querySelector("i");
      const show = input.type === "password";
      input.type = show ? "text" : "password";
      icon.className = show
        ? "ph ph-eye-slash text-lg"
        : "ph ph-eye text-lg";
    });
  });

  // Strength + requirements
  const pwInput = document.getElementById("new-password");
  if (!pwInput) return;
  const COLORS = ["", "#ef4444", "#f59e0b", "#3b82f6", "#16a34a"];
  const LABELS = ["", "Weak", "Fair", "Good", "Strong"];
  const bars = [1, 2, 3, 4].map((n) => document.getElementById(`bar-${n}`));
  const strengthLabel = document.getElementById("strength-label");

  const reqs = [
    { id: "req-length", test: (pw) => pw.length >= 8 },
    { id: "req-upper", test: (pw) => /[A-Z]/.test(pw) },
    { id: "req-number", test: (pw) => /[0-9]/.test(pw) },
    { id: "req-special", test: (pw) => /[^A-Za-z0-9]/.test(pw) },
  ];

  function updateReq(id, pass) {
    const icon = document.getElementById(`${id}-icon`);
    const text = document.getElementById(`${id}-text`);
    const check = icon.querySelector("i");
    icon.style.borderColor = pass ? "var(--color-positive)" : "";
    icon.style.background = pass ? "var(--color-positive)" : "";
    check.classList.toggle("hidden", !pass);
    text.style.color = pass ? "var(--color-heading)" : "";
  }

  pwInput.addEventListener("input", () => {
    const pw = pwInput.value;
    const score = reqs.filter((r) => r.test(pw)).length;
    bars.forEach((b, i) => {
      b.style.background = i < score ? COLORS[score] : "";
    });
    strengthLabel.textContent = pw ? LABELS[score] : "";
    strengthLabel.style.color = COLORS[score];
    reqs.forEach((r) => updateReq(r.id, r.test(pw)));
  });

  // Submit
  document.getElementById("newpw-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const pw = document.getElementById("new-password").value;
    const confirm = document.getElementById("confirm-password").value;
    const errorEl = document.getElementById("form-error");
    const errorText = document.getElementById("error-text");

    if (!pw || !confirm) {
      errorText.textContent = "Please fill in both fields.";
      errorEl.classList.remove("hidden");
      return;
    }
    const passed = reqs.filter((r) => r.test(pw)).length;
    if (passed < 3) {
      errorText.textContent = "Password does not meet the requirements.";
      errorEl.classList.remove("hidden");
      return;
    }
    if (pw !== confirm) {
      errorText.textContent = "Passwords do not match.";
      errorEl.classList.remove("hidden");
      return;
    }
    errorEl.classList.add("hidden");
    document.getElementById("card-form").classList.add("hidden");
    document.getElementById("card-success").classList.remove("hidden");
    document.getElementById("back-link").classList.add("hidden");
  });
})();
