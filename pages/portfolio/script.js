const cardData = [
  {
    category: "real-estate",
    title: "Next Level Real Estate",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459599/p-1_ctoauf.png",
    description: "Innovative solutions for buying, selling, and managing properties with ease.",
    link: "https://www.nextlevelrealestate.ae",
  },
  {
    category: "healthcare",
    title: "Brokylyn Helthcare",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459600/p-2_zjs3yw.png",
    description: "Exceptional healthcare services for the Brooklyn community, prioritizing wellness and care.",
    link: "https://www.brooklynplaza.org",
  },
  {
    category: "healthcare",
    title: "NYC Healthcare",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459596/p-3_urcx9l.png",
    description: "Comprehensive healthcare for NYC residents, ensuring better health and peace of mind.",
    link: "https://www.nychealthandhospitals.org",
  },
  {
    category: "healthcare",
    title: "Mediclinic",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459602/p-4_fn7xha.png",
    description: "Advanced healthcare services tailored to your medical needs with expert care.",
    link: "https://www.mediclinic.ae",
  },
  {
    category: "real-estate",
    title: "Ex Arabia",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459605/p-5_rpemdy.png",
    description: "Premium real estate solutions in Arabian markets, offering unmatched service.",
    link: "https://exarabiauae.com",
  },
  {
    category: "tours-travels",
    title: "BCD Travels",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459594/p-6_fde5cz.png",
    description: "Plan your perfect vacation with expert travel packages and great deals.",
    link: "https://bcdtravel.es",
  },
  {
    category: "others",
    title: "Breezy",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459594/p-7_coubda.png",
    description: "Effortless services for a more breezy and organized lifestyle.",
    link: "https://breezyhomeservices.com.au",
  },
  {
    category: "others",
    title: "Maid to Clean",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459602/p-8_exzhjc.png",
    description: "Top-notch cleaning services ensuring sparkling spaces for your home or office.",
    link: "https://www.maidtoclean.com.au",
  },
  {
    category: "others",
    title: "SG Cleaning",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459606/p-9_xciyqb.png",
    description: "Expert cleaning services delivering spotless results for every corner of your space.",
    link: "https://sgcleaningservices.com",
  },
  {
    category: "others",
    title: "Tidy Here",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459598/p-10_a4mmlm.png",
    description: "Professional cleaning services for a neat and tidy living environment.",
    link: "https://tidyhere.com",
  },
  {
    category: "others",
    title: "Maidpro",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459593/p-11_qcdreg.png",
    description: "Reliable maid services for your home cleaning and organizational needs.",
    link: "https://www.maidpro.com",
  },
  {
    category: "tours-travels",
    title: "SixT Rental",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459581/p-12_maph8s.png",
    description: "Affordable car rental services for hassle-free travel experiences worldwide.",
    link: "#",
  },
  {
    category: "real-estate",
    title: "Enterprise",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459582/p-13_vtoksi.png",
    description: "Trustworthy real estate management and development services for modern enterprises.",
    link: "https://www.enterprise.com",
  },
  {
    category: "tours-travels",
    title: "Budget",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459583/p-14_fcu9ne.png",
    description: "Budget-friendly travel packages tailored to your adventures and explorations.",
    link: "https://www.budget.com",
  },
  {
    category: "tours-travels",
    title: "Hertz",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459584/p-15_xuoehs.png",
    description: "Quality car rentals for your business or leisure travels across destinations.",
    link: "https://www.hertz.com",
  },
  {
    category: "real-estate",
    title: "Cushman & Wakefield",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459584/p-16_y8lp0k.jpg",
    description: "Global leaders in real estate services providing expert market insights and opportunities.",
    link: "https://www.cushwake.ae",
  },
  {
    category: "real-estate",
    title: "CRE Real Estate",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459584/p-17_f1i1f3.jpg",
    description: "Focused on innovative commercial real estate solutions for businesses worldwide.",
    link: "#",
  },
  {
    category: "real-estate",
    title: "Forest Hill",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459585/p-18_hvcrue.jpg",
    description: "Exclusive real estate opportunities in Forest Hill for discerning buyers.",
    link: "https://foresthillsdubai.com",
  },
  {
    category: "healthcare",
    title: "QI Spine Clinic",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459586/p-19_sm9wxx.jpg",
    description: "Specialized spine care and treatment for improved mobility and health.",
    link: "https://www.qispine.com",
  },
  {
    category: "healthcare",
    title: "Viva Clinic",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459587/p-20_u7hhw1.jpg",
    description: "Dedicated healthcare services ensuring vibrant and healthy lives.",
    link: "https://vivaaestheticclinic.com",
  },
  {
    category: "healthcare",
    title: "Shaly Hospital",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459588/p-21_du9yyb.jpg",
    description: "Comprehensive medical services for all health needs under one roof.",
    link: "https://www.shalby.org",
  },
  {
    category: "healthcare",
    title: "Apicha Health",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459589/p-22_yaqsan.jpg",
    description: "Focused on delivering quality care and community-based healthcare solutions.",
    link: "https://www.apicha.org",
  },
  {
    category: "healthcare",
    title: "Kaya Clinic",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459590/p-23_eg0ff9.jpg",
    description: "Advanced skin and healthcare treatments for radiant well-being.",
    link: "https://www.kayaskinclinic.com/uae/en/",
  },
  {
    category: "tours-travels",
    title: "Day OFF Tours",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459597/p-24_ugl0bp.png",
    description: "Memorable day tours tailored for relaxation and exploration.",
    link: "https://dayofftourandtravel.com",
  },
  {
    category: "others",
    title: "We Clean",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459591/p-25_y1yj4f.jpg",
    description: "Efficient cleaning services tailored for residential and commercial spaces.",
    link: "#",
  },
  {
    category: "others",
    title: "Aman's Portfolio",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459592/p-26_ixfmls.png",
    description: "A creative showcase of designs and projects by Aman.",
    link: "https://isacsmile.github.io/Aman_Sharma/",
  },
  {
    category: "others",
    title: "Umrah",
    imageSrc: "https://res.cloudinary.com/dfuufhc0v/image/upload/v1735459604/p-27_q5eux0.png",
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
