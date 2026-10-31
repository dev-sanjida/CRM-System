      // Inline script: wires up the discount drawer open/close + empty→filled state swap
      // (runs after body; no module bundler needed for this tiny interaction)
      document.addEventListener("DOMContentLoaded", function () {
        var backdrop = document.getElementById("discount-drawer-backdrop");
        var drawer = document.getElementById("discount-drawer");
        var openBtns = [
          document.getElementById("open-discount-drawer-btn"),
          document.getElementById("open-discount-drawer-btn-2"),
        ];
        var closeMin = document.getElementById("discount-drawer-minimize");
        var saveBtn = document.getElementById("discount-drawer-save");
        var emptyEl = document.getElementById("discount-empty");
        var filledEl = document.getElementById("discount-filled");

        function openDrawer() {
          backdrop.classList.remove("hidden");
          requestAnimationFrame(function () {
            backdrop.classList.remove("opacity-0");
            drawer.classList.remove("translate-x-full");
          });
          document.body.style.overflow = "hidden";
        }

        function closeDrawer() {
          backdrop.classList.add("opacity-0");
          drawer.classList.add("translate-x-full");
          setTimeout(function () {
            backdrop.classList.add("hidden");
            document.body.style.overflow = "";
          }, 300);
        }

        openBtns.forEach(function (btn) {
          if (btn) btn.addEventListener("click", openDrawer);
        });

        if (closeMin) closeMin.addEventListener("click", closeDrawer);
        if (backdrop) backdrop.addEventListener("click", closeDrawer);

        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape") closeDrawer();
        });

        // Save: show filled state in the panel
        if (saveBtn) {
          saveBtn.addEventListener("click", function () {
            var name = document.getElementById("discount-name");
            if (name && name.value.trim()) {
              if (emptyEl) emptyEl.style.display = "none";
              if (filledEl) filledEl.classList.remove("hidden");
            }
            closeDrawer();
          });
        }

        // Auto-calculate placeholder
        var autoBtn = document.getElementById("auto-calculate-btn");
        var baseEl = document.getElementById("base-price");
        var finalEl = document.getElementById("final-price");
        if (autoBtn && baseEl && finalEl) {
          autoBtn.addEventListener("click", function () {
            var val = parseFloat(baseEl.value.replace(/[^0-9.]/g, ""));
            finalEl.value = isNaN(val) ? "$0" : "$" + val.toLocaleString();
          });
        }
      });
