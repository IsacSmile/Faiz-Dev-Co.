const cardData = [
  {
    category: "real-estate",
    title: "Pinki Pg Lodge",
    imageSrc: "../../images/portfolio/p-6.png",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    category: "tours-travels",
    title: "Adventure Tours",
    imageSrc: "../../images/portfolio/p-6.png",
    description:
      "Explore the best adventure tours around the world with customized packages and unforgettable experiences.",
  },
  {
    category: "healthcare",
    title: "Wellness Clinic",
    imageSrc: "../../images/portfolio/p-6.png",
    description:
      "Quality healthcare services tailored for your needs, ensuring better health and peace of mind.",
  },
  {
    category: "ecommerce",
    title: "Online Store",
    imageSrc: "../../images/portfolio/p-6.png",

    description:
      "Shop the latest trends with our user-friendly online store and enjoy fast delivery.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".container.d-flex");
  const tabs = document.querySelectorAll(".btn-tabs");

  const renderCards = (category = "all") => {
    cardsContainer.innerHTML = ""; // Clear previous cards

    cardData.forEach((card) => {
      if (category === "all" || card.category === category) {
        const cardElement = document.createElement("div");
        cardElement.className = `card ${card.category} card-shadow`;
        cardElement.style.width = "18rem";

        cardElement.innerHTML = `
            <img src="${card.imageSrc}" class="card-img-top" alt="${card.category}-logo" />
            <div class="card-body p-1">
              <div class="d-flex flex-direction-col align-items-center justify-content-between">
                <h6 class="card-title mb-0">${card.title}</h6>
                <a href="#" class="btn btn-primary btn-tabs">View Live</a>
              </div>
              <p class="card-text lh-sm my-2">${card.description}</p>
            </div>
          `;

        cardsContainer.appendChild(cardElement);
      }
    });
  };

  // Initial render of all cards
  renderCards();

  // Filter tabs event listener
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      const category = event.target.getAttribute("data-category") || "all";
      renderCards(category);

      tabs.forEach((t) => t.classList.remove("active"));
      event.target.classList.add("active");
    });
  });
});
