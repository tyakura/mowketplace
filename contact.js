function toggleCard(card) {
  card.classList.toggle("expanded");

  let imgDefault = card.getAttribute("data-img-default");
  let imgExpanded = card.getAttribute("data-img-expanded");

  if (card.classList.contains("expanded")) {
    // gambar saat expand
    card.style.backgroundImage = `url('${imgExpanded}')`;
  } else {
    // kembali ke gambar kecil
    card.style.backgroundImage = `url('${imgDefault}')`;
  }
}

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const elementsToAnimate = document.querySelectorAll(
  ".contact-banner, " +
    ".attaya, .malik, .hafidz, .hilmi, .affan, " +
    ".info-box, " +
    ".contact-container, " +
    ".map-position, .map-img"
);

elementsToAnimate.forEach((element) => {
  observer.observe(element);
});
