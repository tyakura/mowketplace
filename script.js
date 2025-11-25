// ======================================================
// 1. KLIK PRODUCT → PROMPT BELI
// ======================================================
const cards = document.querySelectorAll(".product-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let brp = parseInt(prompt("Mau beli berapa banyak?"));
    if (!brp) return;

    let total = brp * 35;
    alert(
      `Anda telah membeli ${brp}, dengan total harga ${total}. Terima kasih telah membeli!`
    );
  });
});

// ======================================================
// 2. FILTER PRODUK + ANIMASI CINEMATIC TANPA SHADOW
// ======================================================
function filterProducts(category) {
  const items = document.querySelectorAll(".product-card");

  // Hapus active semua
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Tambahkan active tombol
  const activeBtn = document.querySelector(
    `.tab-btn[onclick="filterProducts('${category}')"]`
  );
  if (activeBtn) activeBtn.classList.add("active");

  // Sembunyikan semua item
  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.filter = "blur(10px)";
    item.style.transform = "translateY(40px) scale(0.92)";
    item.style.display = "none";
  });

  // Pilih item kategori
  const selected =
    category === "all"
      ? items
      : document.querySelectorAll(`.product-card[data-category="${category}"]`);

  // Animasi masuk super smooth
  selected.forEach((item, index) => {
    setTimeout(() => {
      item.style.display = "block";

      item.style.transition = `
        opacity 1.1s cubic-bezier(0.12, 0.85, 0.15, 1.2),
        filter 1s cubic-bezier(0.12, 0.85, 0.15, 1.2),
        transform 1.2s cubic-bezier(0.15, 1.4, 0.25, 1.05)
      `;

      item.style.opacity = "1";
      item.style.filter = "blur(0)";
      item.style.transform = "translateY(0) scale(1.045)";

      // Overshoot balik
      setTimeout(() => {
        item.style.transform = "translateY(0) scale(1)";
      }, 300);
    }, index * 90);
  });
}

// ======================================================
// 3. SCROLL ANIMATION SUPER SMOOTH TANPA SHADOW
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".scroll-animate");
  const delay = 120;

  // Kondisi awal
  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.filter = "blur(12px)";
    item.style.transform = "translateY(35px) scale(0.96)";
    item.style.transition = "none";
  });

  function scrollTrigger() {
    let d = 0;

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();

      if (
        rect.top < window.innerHeight * 0.85 &&
        !item.classList.contains("visible")
      ) {
        item.classList.add("visible");

        setTimeout(() => {
          item.style.transition = `
            opacity 1.1s ease-out,
            filter 0.9s ease-out,
            transform 1.1s cubic-bezier(0.15, 1.4, 0.25, 1.05)
          `;

          item.style.opacity = "1";
          item.style.filter = "blur(0)";
          item.style.transform = "translateY(0) scale(1.03)";

          // Balik soft
          setTimeout(() => {
            item.style.transform = "translateY(0) scale(1)";
          }, 300);
        }, d);

        d += delay;
      }
    });
  }

  window.addEventListener("scroll", scrollTrigger);
  scrollTrigger();
});

// ======================================================
// 4. ICON ALERT
// ======================================================
const icons = document.querySelectorAll("svg, i[data-lucide]");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    alert("Maaf, fitur ini belum tersedia.");
  });
});
