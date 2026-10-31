      document.addEventListener("DOMContentLoaded", () => {
        // ── Toast helper ──────────────────────────────────────────────────────
        function showToast(message, type = "success") {
          const existing = document.getElementById("deal-toast");
          if (existing) existing.remove();

          const icons = {
            success: "ph-check-circle",
            info: "ph-info",
            warning: "ph-warning",
          };
          const colors = {
            success: "text-positive",
            info: "text-accent",
            warning: "text-warning",
          };

          const toast = document.createElement("div");
          toast.id = "deal-toast";
          toast.className =
            "fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] flex items-center gap-3 px-4 py-3 rounded-xl card shadow-xl border border-border text-sm font-medium text-heading min-w-[260px] max-w-sm opacity-0 translate-y-2 transition-all duration-300";
          toast.innerHTML = `
            <i class="ph-fill ${icons[type]} text-xl ${colors[type]} shrink-0"></i>
            <span class="flex-1">${message}</span>
            <button class="text-muted hover:text-heading ml-2 shrink-0" onclick="this.parentElement.remove()">
              <i class="ph ph-x text-base"></i>
            </button>`;
          document.body.appendChild(toast);

          requestAnimationFrame(() => {
            toast.classList.remove("opacity-0", "translate-y-2");
          });
          setTimeout(() => {
            toast.classList.add("opacity-0", "translate-y-2");
            setTimeout(() => toast.remove(), 300);
          }, 3500);
        }

        // ── Stage stepper ─────────────────────────────────────────────────────
        const steps = document.querySelectorAll("[data-stage-step]");
        const progressLine = document.getElementById("stage-progress-line");
        let currentStep = 1;

        function setStage(n) {
          currentStep = n;
          steps.forEach((btn, i) => {
            const circle = btn.querySelector("[data-stage-circle]");
            const label = btn.querySelector("[data-stage-label]");
            if (i < n) {
              // Completed — solid green with checkmark
              circle.className =
                "w-9 h-9 rounded-full border-2 border-positive bg-positive flex items-center justify-center shrink-0 transition-all duration-200";
              circle.innerHTML =
                '<i class="ph-bold ph-check text-white text-sm"></i>';
              label.className =
                "text-[11px] font-semibold text-positive text-center leading-tight";
            } else if (i === n) {
              // Current / Active — accent blue with white dot
              circle.className =
                "w-9 h-9 rounded-full border-2 border-accent bg-accent flex items-center justify-center shrink-0 transition-all duration-200 ring-2 ring-accent/30";
              circle.innerHTML =
                '<span class="w-3 h-3 rounded-full bg-white"></span>';
              label.className =
                "text-[11px] font-semibold text-accent text-center leading-tight";
            } else {
              // Pending — gray outlined with gray dot
              circle.className =
                "w-9 h-9 rounded-full border-2 border-border bg-card flex items-center justify-center shrink-0 transition-all duration-200";
              circle.innerHTML =
                '<span class="w-3 h-3 rounded-full bg-border" data-stage-dot></span>';
              label.className =
                "text-[11px] font-medium text-muted text-center leading-tight";
            }
          });
          if (progressLine) {
            const pct = steps.length > 1 ? (n / (steps.length - 1)) * 100 : 100;
            progressLine.style.width = Math.min(pct, 100) + "%";
          }
        }

        steps.forEach((btn, i) => {
          btn.addEventListener("click", () => setStage(i));
        });

        // ── Header action buttons ─────────────────────────────────────────────
        document
          .querySelector("[data-action='save-draft']")
          ?.addEventListener("click", () => {
            showToast("Draft saved successfully.", "info");
          });

        document
          .querySelector("[data-action='create-deal']")
          ?.addEventListener("click", () => {
            const dealName = document
              .querySelector("input[placeholder='Enter name']")
              ?.value.trim();
            if (!dealName) {
              showToast("Please enter a deal name before creating.", "warning");
              document
                .querySelector("input[placeholder='Enter name']")
                ?.focus();
              return;
            }
            showToast("Deal created successfully!");
            setTimeout(() => {
              window.location.href = "deals.html";
            }, 1800);
          });

        // ── Association create buttons ────────────────────────────────────────
        document
          .querySelector("[data-action='create-company']")
          ?.addEventListener("click", () => {
            window.location.href = "add-company.html";
          });

        document
          .querySelector("[data-action='create-contact']")
          ?.addEventListener("click", () => {
            window.location.href = "add-contact.html";
          });

        document
          .querySelector("[data-action='create-product']")
          ?.addEventListener("click", () => {
            showToast("Product creation coming soon.", "info");
          });
      });
