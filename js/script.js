/* ============================================================
   Portfolyo — etkileşimler
   ============================================================ */

// --- Mobil menü ---
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Menüden bir linke tıklanınca menüyü kapat
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// --- Yetenek çubuklarını kaydırınca doldur ---
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const skill = entry.target;
      const level = skill.dataset.level;
      const fill = skill.querySelector(".skill__fill");
      const pct = skill.querySelector(".skill__pct");

      fill.style.width = level + "%";

      // Yüzde sayacını animasyonla artır
      let current = 0;
      const target = Number(level);
      const step = Math.max(1, Math.round(target / 40));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        pct.textContent = current + "%";
        if (current >= target) clearInterval(timer);
      }, 25);

      skillObserver.unobserve(skill);
    });
  },
  { threshold: 0.4 }
);

document.querySelectorAll(".skill").forEach((el) => skillObserver.observe(el));

// --- Bölüm görünürlük animasyonu ---
document
  .querySelectorAll(".skill, .tag, .section-head, .hero__card")
  .forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// --- Yıl bilgisi ---
document.getElementById("year").textContent = new Date().getFullYear();
