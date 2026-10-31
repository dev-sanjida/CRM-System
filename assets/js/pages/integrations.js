      // ── Data ──────────────────────────────────────────────────────
      const INTEGRATIONS = [
        {
          category: "Featured apps",
          subtitle: "Streamline work, save your time and growth easier",
          items: [
            {
              id: "crealbit",
              name: "CrealBit",
              domain: "clearbit.com",
              logo: "https://cdn.worldvectorlogo.com/logos/clearbit.svg",
              icon: "ph-plugs-connected",
              iconBg: "#2563eb",
              iconColor: "#fff",
              desc: "Enrich your CRM data by integrating with Clearbit for better customer insights and lead generation.",
              enabled: true,
              tab: "activated",
              connectPerms: [
                "Access basic company information and details",
                "Sync contact and lead data automatically",
                "Enrich CRM profiles with external data",
              ],
              slug: "crealbit",
            },
            {
              id: "zapier",
              name: "Zapier",
              domain: "zapier.com",
              logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
              icon: "ph-lightning",
              iconBg: "#FF4A00",
              iconColor: "#fff",
              desc: "Automates workflows by connecting your CRM with other apps.",
              enabled: true,
              tab: "activated",
              connectPerms: [
                "Access your CRM workflows and triggers",
                "Create and manage automation zaps",
                "Send and receive data from connected apps",
              ],
              slug: "zapier",
            },
            {
              id: "make",
              name: "Make",
              domain: "make.com",
              logo: "https://cdn.worldvectorlogo.com/logos/make-logo-rgb-3.svg",
              icon: "ph-intersect",
              iconBg: "#6D2EF9",
              iconColor: "#fff",
              desc: "Automate complex workflows by integrating your CRM with Make, creating powerful task automations.",
              enabled: false,
              tab: "disabled",
              connectPerms: [
                "Access your CRM data and workflows",
                "Build visual automation scenarios",
                "Connect unlimited apps and services",
              ],
              slug: "make",
            },
            {
              id: "asana",
              name: "Asana",
              domain: "asana.com",
              logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg",
              icon: "ph-circles-three",
              iconBg: "#F06A6A",
              iconColor: "#fff",
              desc: "Connect Asana with your CRM to manage tasks and track project progress seamlessly across teams.",
              enabled: true,
              tab: "activated",
              connectPerms: [
                "Access Asana tasks and projects",
                "Sync CRM contacts with Asana team members",
                "Create tasks directly from CRM records",
              ],
              slug: "asana",
            },
            {
              id: "stripe",
              name: "Stripe",
              domain: "stripe.com",
              logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
              icon: "ph-credit-card",
              iconBg: "#6772E5",
              iconColor: "#fff",
              desc: "Simplify payment processing by connecting your CRM to Stripe for real-time tracking of transactions.",
              enabled: false,
              tab: "disabled",
              connectPerms: [
                "Access payment and subscription data",
                "Sync customer billing information",
                "Track revenue and transaction history",
              ],
              slug: "stripe",
            },
            {
              id: "dropbox",
              name: "Dropbox",
              domain: "dropbox.com",
              logo: "https://cdn.worldvectorlogo.com/logos/dropbox.svg",
              icon: "ph-folder-open",
              iconBg: "#0061FF",
              iconColor: "#fff",
              desc: "Integrate Dropbox with your CRM to easily share and manage files for a more organized workflow.",
              enabled: false,
              tab: "disabled",
              connectPerms: [
                "Access and manage files in Dropbox",
                "Share documents linked to CRM records",
                "Sync folder structure with CRM categories",
              ],
              slug: "dropbox",
            },
          ],
        },
        {
          category: "Data & Analysis",
          subtitle: "Be Easier doing a business with best analysis tools",
          items: [
            {
              id: "crealbit2",
              name: "CrealBit",
              domain: "clearbit.com",
              logo: "https://cdn.worldvectorlogo.com/logos/clearbit.svg",
              icon: "ph-plugs-connected",
              iconBg: "#2563eb",
              iconColor: "#fff",
              desc: "Enrich your CRM data by integrating with Clearbit for better customer insights and lead generation.",
              enabled: true,
              tab: "activated",
              connectPerms: [
                "Access basic company information and details",
                "Sync contact and lead data automatically",
                "Enrich CRM profiles with external data",
              ],
              slug: "crealbit",
            },
            {
              id: "make2",
              name: "Make",
              domain: "make.com",
              logo: "https://cdn.worldvectorlogo.com/logos/make-logo-rgb-3.svg",
              icon: "ph-intersect",
              iconBg: "#6D2EF9",
              iconColor: "#fff",
              desc: "Automate complex workflows by integrating your CRM with Make, creating powerful task automations.",
              enabled: false,
              tab: "disabled",
              connectPerms: [
                "Access your CRM data and workflows",
                "Build visual automation scenarios",
                "Connect unlimited apps and services",
              ],
              slug: "make",
            },
            {
              id: "asana2",
              name: "Asana",
              domain: "asana.com",
              logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg",
              icon: "ph-circles-three",
              iconBg: "#F06A6A",
              iconColor: "#fff",
              desc: "Connect Asana with your CRM to manage tasks and track project progress seamlessly across teams.",
              enabled: true,
              tab: "activated",
              connectPerms: [
                "Access Asana tasks and projects",
                "Sync CRM contacts with Asana team members",
                "Create tasks directly from CRM records",
              ],
              slug: "asana",
            },
            {
              id: "zapier2",
              name: "Zapier",
              domain: "zapier.com",
              logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
              icon: "ph-lightning",
              iconBg: "#FF4A00",
              iconColor: "#fff",
              desc: "Automates workflows by connecting your CRM with other apps.",
              enabled: true,
              tab: "activated",
              connectPerms: [
                "Access your CRM workflows and triggers",
                "Create and manage automation zaps",
                "Send and receive data from connected apps",
              ],
              slug: "zapier",
            },
            {
              id: "stripe2",
              name: "Stripe",
              domain: "stripe.com",
              logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
              icon: "ph-credit-card",
              iconBg: "#6772E5",
              iconColor: "#fff",
              desc: "Simplify payment processing by connecting your CRM to Stripe for real-time tracking of transactions.",
              enabled: false,
              tab: "disabled",
              connectPerms: [
                "Access payment and subscription data",
                "Sync customer billing information",
                "Track revenue and transaction history",
              ],
              slug: "stripe",
            },
            {
              id: "dropbox2",
              name: "Dropbox",
              domain: "dropbox.com",
              logo: "https://cdn.worldvectorlogo.com/logos/dropbox.svg",
              icon: "ph-folder-open",
              iconBg: "#0061FF",
              iconColor: "#fff",
              desc: "Integrate Dropbox with your CRM to easily share and manage files for a more organized workflow.",
              enabled: true,
              tab: "activated",
              connectPerms: [
                "Access and manage files in Dropbox",
                "Share documents linked to CRM records",
                "Sync folder structure with CRM categories",
              ],
              slug: "dropbox",
            },
          ],
        },
      ];

      // ── State ─────────────────────────────────────────────────────
      let activeTab = "all";
      let searchQuery = "";

      // ── Toggle switch HTML ─────────────────────────────────────────
      function toggleHTML(enabled, id) {
        return `<button
          data-toggle="${id}"
          role="switch"
          aria-checked="${enabled}"
          class="relative inline-flex w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${enabled ? "bg-heading" : "bg-border"}"
        >
          <span class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${enabled ? "translate-x-5" : "translate-x-0"}"></span>
        </button>`;
      }

      // ── Integration card HTML ─────────────────────────────────────
      function appIconHTML(item, size = "w-11 h-11") {
        if (item.logo) {
          return `<div class="${size} rounded-xl flex items-center justify-center shrink-0 bg-card border border-border overflow-hidden p-1.5">
            <img src="${item.logo}" alt="${item.name}" class="w-full h-full object-contain" onerror="var p=this.parentElement;p.style.background='${item.iconBg}';p.style.border='none';p.style.padding='0';p.innerHTML='<i class=\\'ph ${item.icon} text-xl\\' style=\\'color:${item.iconColor}\\'></i>'"  />
          </div>`;
        }
        return `<div class="${size} rounded-xl flex items-center justify-center shrink-0" style="background:${item.iconBg}">
          <i class="ph ${item.icon} text-xl" style="color:${item.iconColor}"></i>
        </div>`;
      }

      function cardHTML(item) {
        return `<div class="card p-5 flex flex-col gap-4" data-int-id="${item.id}" data-int-tab="${item.tab}">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              ${appIconHTML(item)}
              <div class="min-w-0">
                <p class="text-sm font-bold text-heading">${item.name}</p>
                <a href="#" class="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors">
                  ${item.domain} <i class="ph ph-arrow-square-out text-[11px]"></i>
                </a>
              </div>
            </div>
          </div>
          <p class="text-sm text-muted leading-relaxed line-clamp-2">${item.desc}</p>
          <div class="flex items-center justify-between gap-3 pt-0.5">
            <button
              data-view-detail="${item.id}"
              class="h-9 px-4 rounded-xl border border-border bg-subtle text-sm font-semibold text-heading hover:bg-card transition-colors"
            >
              View detail
            </button>
            ${toggleHTML(item.enabled, item.id)}
          </div>
        </div>`;
      }

      // ── Render ────────────────────────────────────────────────────
      function getFiltered() {
        const q = searchQuery.toLowerCase();
        return INTEGRATIONS.map((section) => ({
          ...section,
          items: section.items.filter((item) => {
            const matchTab = activeTab === "all" || item.tab === activeTab;
            const matchSearch =
              !q ||
              item.name.toLowerCase().includes(q) ||
              item.desc.toLowerCase().includes(q);
            return matchTab && matchSearch;
          }),
        })).filter((s) => s.items.length > 0);
      }

      function render() {
        const body = document.getElementById("integrations-body");
        const emptyEl = document.getElementById("integrations-empty");
        const sections = getFiltered();

        if (sections.length === 0) {
          body.innerHTML = "";
          emptyEl.style.display = "flex";
          return;
        }
        emptyEl.style.display = "none";

        body.innerHTML = sections
          .map(
            (s) => `<div>
              <div class="mb-4">
                <h2 class="text-base font-bold text-heading">${s.category}</h2>
                <p class="text-sm text-muted mt-0.5">${s.subtitle}</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                ${s.items.map(cardHTML).join("")}
              </div>
            </div>`,
          )
          .join("");

        // Wire toggles
        body.querySelectorAll("[data-toggle]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.dataset.toggle;
            const item = INTEGRATIONS.flatMap((s) => s.items).find(
              (i) => i.id === id,
            );
            if (item) {
              item.enabled = !item.enabled;
              item.tab = item.enabled ? "activated" : "disabled";
              render();
            }
          });
        });

        // Wire view detail → opens connect modal
        body.querySelectorAll("[data-view-detail]").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.dataset.viewDetail;
            const item = INTEGRATIONS.flatMap((s) => s.items).find(
              (i) => i.id === id,
            );
            if (item) openConnectModal(item);
          });
        });
      }

      // ── Connect modal ─────────────────────────────────────────────
      function openConnectModal(item) {
        document.getElementById("modal-title").textContent =
          `Connect Clientra with ${item.name}`;
        document.getElementById("modal-url").textContent =
          `app.Clientra.com/integrations/${item.slug}`;

        // Update app icon
        const iconEl = document.getElementById("modal-icon-app");
        iconEl.style.background = item.logo ? "var(--color-card)" : item.iconBg;
        iconEl.style.border = item.logo
          ? "1px solid var(--color-border)"
          : "none";
        iconEl.style.padding = item.logo ? "10px" : "0";
        iconEl.innerHTML = item.logo
          ? `<img src="${item.logo}" alt="${item.name}" class="w-full h-full object-contain" onerror="var p=this.parentElement;p.style.background='${item.iconBg}';p.style.border='none';p.style.padding='0';p.innerHTML='<i class=\\'ph ${item.icon} text-2xl\\' style=\\'color:${item.iconColor}\\'></i>'">`
          : `<i class="ph ${item.icon} text-2xl" style="color:${item.iconColor}"></i>`;

        // Permissions
        const permsEl = document.getElementById("modal-perms");
        permsEl.innerHTML = item.connectPerms
          .map(
            (p) =>
              `<li class="flex items-start gap-2.5 text-sm text-text">
                <i class="ph-fill ph-check-circle text-base text-positive shrink-0 mt-0.5"></i>
                ${p}
              </li>`,
          )
          .join("");

        const backdrop = document.getElementById("connect-modal-backdrop");
        const modal = document.getElementById("connect-modal");
        backdrop.classList.remove("opacity-0", "pointer-events-none");
        modal.classList.remove("scale-95");
        modal.classList.add("scale-100");
      }

      function closeConnectModal() {
        const backdrop = document.getElementById("connect-modal-backdrop");
        const modal = document.getElementById("connect-modal");
        backdrop.classList.add("opacity-0", "pointer-events-none");
        modal.classList.remove("scale-100");
        modal.classList.add("scale-95");
      }

      // ── Init ──────────────────────────────────────────────────────
      document.addEventListener("DOMContentLoaded", () => {
        render();

        // Tabs
        document.querySelectorAll("[data-int-tab]").forEach((btn) => {
          btn.addEventListener("click", () => {
            activeTab = btn.dataset.intTab;
            document.querySelectorAll("[data-int-tab]").forEach((b) => {
              const active = b.dataset.intTab === activeTab;
              b.classList.toggle("bg-subtle", active);
              b.classList.toggle("text-heading", active);
              b.classList.toggle("font-semibold", active);
              b.classList.toggle("font-medium", !active);
              b.classList.toggle("text-muted", !active);
            });
            render();
          });
        });

        // Search
        document.getElementById("int-search").addEventListener("input", (e) => {
          searchQuery = e.target.value.trim();
          render();
        });

        // Modal close
        document
          .getElementById("connect-modal-close")
          ?.addEventListener("click", closeConnectModal);
        document
          .getElementById("connect-modal-cancel")
          ?.addEventListener("click", closeConnectModal);
        document
          .getElementById("connect-modal-backdrop")
          ?.addEventListener("click", (e) => {
            if (e.target === e.currentTarget) closeConnectModal();
          });

        // Copy link
        document
          .getElementById("modal-copy-btn")
          ?.addEventListener("click", () => {
            const url = document.getElementById("modal-url")?.textContent;
            navigator.clipboard?.writeText(url).catch(() => {});
            const btn = document.getElementById("modal-copy-btn");
            btn.innerHTML = `<i class="ph ph-check text-base"></i> Copied!`;
            setTimeout(() => {
              btn.innerHTML = `<i class="ph ph-copy text-base"></i> Copy link`;
            }, 2000);
          });
      });
