// Clientra – OTP Verification page logic (standalone, not part of the main bundle).
(function () {
  const displayEmail = document.getElementById("display-email");
  const otpForm = document.getElementById("otp-form");
  if (!displayEmail || !otpForm) return;

  // Show email
  const email =
    sessionStorage.getItem("Clientra-verify-email") || "your email";
  displayEmail.textContent = email;

  // OTP input wiring
  const inputs = Array.from(document.querySelectorAll(".otp-input"));

  inputs.forEach((input, idx) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (!input.value && idx > 0) {
          inputs[idx - 1].focus();
          inputs[idx - 1].value = "";
          inputs[idx - 1].classList.remove("filled");
        }
      }
    });

    input.addEventListener("input", (e) => {
      const val = e.target.value.replace(/\D/g, "");
      input.value = val.slice(-1);
      input.classList.toggle("filled", !!input.value);
      if (val && idx < inputs.length - 1) {
        inputs[idx + 1].focus();
      }
      // Auto-submit when all filled
      if (inputs.every((i) => i.value)) {
        otpForm.dispatchEvent(new Event("submit"));
      }
    });

    input.addEventListener("paste", (e) => {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData)
        .getData("text")
        .replace(/\D/g, "");
      pasted
        .split("")
        .slice(0, 6)
        .forEach((ch, i) => {
          if (inputs[i]) {
            inputs[i].value = ch;
            inputs[i].classList.add("filled");
          }
        });
      const next = Math.min(pasted.length, 5);
      inputs[next].focus();
    });
  });

  // Form submit — demo: any 6-digit code works
  otpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = inputs.map((i) => i.value).join("");
    const errorEl = document.getElementById("otp-error");
    const errorText = document.getElementById("otp-error-text");

    if (code.length < 6) {
      errorText.textContent = "Please enter all 6 digits.";
      errorEl.classList.remove("hidden");
      inputs.forEach((i) => {
        if (!i.value) i.classList.add("error");
      });
      return;
    }

    // Demo: treat "000000" as wrong, anything else as correct
    if (code === "000000") {
      errorText.textContent = "Invalid code. Please try again.";
      errorEl.classList.remove("hidden");
      inputs.forEach((i) => {
        i.classList.add("error");
        setTimeout(() => i.classList.remove("error"), 400);
      });
      return;
    }

    errorEl.classList.add("hidden");
    // From forgot-password flow → new-password, from register flow → dashboard
    const fromReset = document.referrer.includes("forgot-password");
    window.location.href = fromReset ? "new-password.html" : "index.html";
  });

  // Countdown timer
  let timeLeft = 120;
  const timerEl = document.getElementById("timer");
  const timerLabel = document.getElementById("timer-label");
  const resendBtn = document.getElementById("resend-btn");

  const tick = setInterval(() => {
    timeLeft--;
    const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const s = String(timeLeft % 60).padStart(2, "0");
    timerEl.textContent = `${m}:${s}`;
    if (timeLeft <= 0) {
      clearInterval(tick);
      timerLabel.style.display = "none";
      timerEl.style.display = "none";
      resendBtn.classList.remove("hidden");
    }
  }, 1000);

  resendBtn.addEventListener("click", () => {
    timeLeft = 120;
    timerEl.textContent = "02:00";
    timerLabel.style.display = "";
    timerEl.style.display = "";
    resendBtn.classList.add("hidden");
    inputs.forEach((i) => {
      i.value = "";
      i.classList.remove("filled", "error");
    });
    inputs[0].focus();
    const interval = setInterval(() => {
      timeLeft--;
      const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
      const s = String(timeLeft % 60).padStart(2, "0");
      timerEl.textContent = `${m}:${s}`;
      if (timeLeft <= 0) {
        clearInterval(interval);
        timerLabel.style.display = "none";
        timerEl.style.display = "none";
        resendBtn.classList.remove("hidden");
      }
    }, 1000);
  });
})();
