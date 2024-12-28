const cardData = [
  {
    category: "real-estate",
    title: "Next Level Real Estate",
    imageSrc: "../../images/portfolio/p-1.png",
    description: "Innovative solutions for buying, selling, and managing properties with ease.",
    link: "https://www.nextlevelrealestate.ae",
  },
  {
    category: "healthcare",
    title: "Brokylyn Helthcare",
    imageSrc: "../../images/portfolio/p-2.png",
    description: "Exceptional healthcare services for the Brooklyn community, prioritizing wellness and care.",
    link: "https://www.brooklynplaza.org",
  },
  {
    category: "healthcare",
    title: "NYC Healthcare",
    imageSrc: "../../images/portfolio/p-3.png",
    description: "Comprehensive healthcare for NYC residents, ensuring better health and peace of mind.",
    link: "https://www.nychealthandhospitals.org",
  },
  {
    category: "healthcare",
    title: "Mediclinic",
    imageSrc: "../../images/portfolio/p-4.png",
    description: "Advanced healthcare services tailored to your medical needs with expert care.",
    link: "https://www.mediclinic.ae",
  },
  {
    category: "real-estate",
    title: "Ex Arabia",
    imageSrc: "../../images/portfolio/p-5.png",
    description: "Premium real estate solutions in Arabian markets, offering unmatched service.",
    link: "https://exarabiauae.com",
  },
  {
    category: "tours-travels",
    title: "BCD Travels",
    imageSrc: "../../images/portfolio/p-6.png",
    description: "Plan your perfect vacation with expert travel packages and great deals.",
    link: "https://bcdtravel.es",
  },
  {
    category: "others",
    title: "Breezy",
    imageSrc: "../../images/portfolio/p-7.png",
    description: "Effortless services for a more breezy and organized lifestyle.",
    link: "https://breezyhomeservices.com.au",
  },
  {
    category: "others",
    title: "Maid to Clean",
    imageSrc: "../../images/portfolio/p-8.png",
    description: "Top-notch cleaning services ensuring sparkling spaces for your home or office.",
    link: "https://www.maidtoclean.com.au",
  },
  {
    category: "others",
    title: "SG Cleaning",
    imageSrc: "../../images/portfolio/p-9.png",
    description: "Expert cleaning services delivering spotless results for every corner of your space.",
    link: "https://sgcleaningservices.com",
  },
  {
    category: "others",
    title: "Tidy Here",
    imageSrc: "../../images/portfolio/p-10.png",
    description: "Professional cleaning services for a neat and tidy living environment.",
    link: "https://tidyhere.com",
  },
  {
    category: "others",
    title: "Maidpro",
    imageSrc: "../../images/portfolio/p-11.png",
    description: "Reliable maid services for your home cleaning and organizational needs.",
    link: "https://www.maidpro.com",
  },
  {
    category: "tours-travels",
    title: "SixT Rental",
    imageSrc: "../../images/portfolio/p-12.png",
    description: "Affordable car rental services for hassle-free travel experiences worldwide.",
    link: "#",
  },
  {
    category: "real-estate",
    title: "Enterprise",
    imageSrc: "../../images/portfolio/p-13.png",
    description: "Trustworthy real estate management and development services for modern enterprises.",
    link: "https://www.enterprise.com",
  },
  {
    category: "tours-travels",
    title: "Budget",
    imageSrc: "../../images/portfolio/p-14.png",
    description: "Budget-friendly travel packages tailored to your adventures and explorations.",
    link: "https://www.budget.com",
  },
  {
    category: "tours-travels",
    title: "Hertz",
    imageSrc: "../../images/portfolio/p-15.png",
    description: "Quality car rentals for your business or leisure travels across destinations.",
    link: "https://www.hertz.com",
  },
  {
    category: "real-estate",
    title: "Cushman & Wakefield",
    imageSrc: "../../images/portfolio/p-16.jpeg",
    description: "Global leaders in real estate services providing expert market insights and opportunities.",
    link: "https://www.cushwake.ae",
  },
  {
    category: "real-estate",
    title: "CRE Real Estate",
    imageSrc: "../../images/portfolio/p-17.jpeg",
    description: "Focused on innovative commercial real estate solutions for businesses worldwide.",
    link: "#",
  },
  {
    category: "real-estate",
    title: "Forest Hill",
    imageSrc: "../../images/portfolio/p-18.jpeg",
    description: "Exclusive real estate opportunities in Forest Hill for discerning buyers.",
    link: "https://foresthillsdubai.com",
  },
  {
    category: "healthcare",
    title: "QI Spine Clinic",
    imageSrc: "../../images/portfolio/p-19.jpeg",
    description: "Specialized spine care and treatment for improved mobility and health.",
    link: "https://www.qispine.com",
  },
  {
    category: "healthcare",
    title: "Viva Clinic",
    imageSrc: "../../images/portfolio/p-20.jpeg",
    description: "Dedicated healthcare services ensuring vibrant and healthy lives.",
    link: "https://vivaaestheticclinic.com",
  },
  {
    category: "healthcare",
    title: "Shaly Hospital",
    imageSrc: "../../images/portfolio/p-21.jpeg",
    description: "Comprehensive medical services for all health needs under one roof.",
    link: "https://www.shalby.org",
  },
  {
    category: "healthcare",
    title: "Apicha Health",
    imageSrc: "../../images/portfolio/p-22.jpeg",
    description: "Focused on delivering quality care and community-based healthcare solutions.",
    link: "https://www.apicha.org",
  },
  {
    category: "healthcare",
    title: "Kaya Clinic",
    imageSrc: "../../images/portfolio/p-23.jpeg",
    description: "Advanced skin and healthcare treatments for radiant well-being.",
    link: "https://www.kayaskinclinic.com/uae/en/",
  },
  {
    category: "tours-travels",
    title: "Day OFF Tours",
    imageSrc: "../../images/portfolio/p-24.png",
    description: "Memorable day tours tailored for relaxation and exploration.",
    link: "https://dayofftourandtravel.com",
  },
  {
    category: "others",
    title: "We Clean",
    imageSrc: "../../images/portfolio/p-25.jpg",
    description: "Efficient cleaning services tailored for residential and commercial spaces.",
    link: "#",
  },
  {
    category: "others",
    title: "Aman's Portfolio",
    imageSrc: "../../images/portfolio/p-26.png",
    description: "A creative showcase of designs and projects by Aman.",
    link: "https://isacsmile.github.io/Aman_Sharma/",
  },
  {
    category: "others",
    title: "Umrah",
    imageSrc: "../../images/portfolio/p-27.png",
    description: "Easy Umrah and hajj pilgramage servies accross India.",
    link: "https://easyumrahtour.com/",
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
                <a id="live-link-animate" href="${card.link}" target="_blank" class="btn btn-primary btn-tabs">View Live</a>
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
