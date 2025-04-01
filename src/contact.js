const renderContactPage = () => {
  const content = document.getElementById("content");
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Contact";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const hoursSection = document.createElement("div");
  const hoursTitle = document.createElement("h3");
  hoursTitle.textContent = "Hours of Operation";
  hoursSection.appendChild(hoursTitle);

  const hours1 = document.createElement("h4");
  hours1.textContent = "Monday - Thursday: 5:00 PM - 10:00 PM";
  hoursSection.appendChild(hours1);

  const hours2 = document.createElement("h4");
  hours2.textContent = "Friday - Sunday: 5:00 PM - 11:00 PM";
  hoursSection.appendChild(hours2);

  contactContainer.appendChild(hoursSection);
  contactContainer.appendChild(document.createElement("hr"));

  const reservationsSection = document.createElement("div");
  const reservationsTitle = document.createElement("h3");
  reservationsTitle.textContent = "Reservations";
  reservationsSection.appendChild(reservationsTitle);

  const reservationsText = document.createElement("h4");
  reservationsText.textContent =
    "Please call or email for reservations. We recommend booking in advance for special events and weekends.";
  reservationsSection.appendChild(reservationsText);

  contactContainer.appendChild(reservationsSection);
  contactContainer.appendChild(document.createElement("hr"));

  const addressSection = document.createElement("div");
  const addressTitle = document.createElement("h3");
  addressTitle.textContent = "Address";
  addressSection.appendChild(addressTitle);

  const addressText = document.createElement("h4");
  addressText.classList.add("address");
  addressText.innerHTML =
    "123 Rue du Mont-Royal,<br>Montréal, QC H2X 1V2, Canada<br>Phone: +1 (123) 456-7890<br>Email: contact@chateaublanc.com";
  addressSection.appendChild(addressText);

  contactContainer.appendChild(addressSection);

  content.appendChild(pageTitle);
  content.appendChild(contactContainer);
};

export { renderContactPage };
