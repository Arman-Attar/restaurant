const renderMenuPage = () => {
  const content = document.getElementById("content");
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Menu";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const section1 = document.createElement("div");
  section1.id = "section";

  const title1 = document.createElement("p");
  title1.classList.add("category");
  title1.textContent = "Entrées (Appetizers)";
  section1.appendChild(title1);
  section1.appendChild(document.createElement("hr"));

  const item1 = document.createElement("div");
  item1.classList.add("item");
  const item1Title = document.createElement("h4");
  item1Title.textContent = "Soupe à l’Oignon Gratinée";
  const item1Description = document.createElement("p");
  item1Description.textContent =
    "Classic French onion soup with Gruyère cheese";
  item1.appendChild(item1Title);
  item1.appendChild(item1Description);

  const item2 = document.createElement("div");
  item2.classList.add("item");
  const item2Title = document.createElement("h4");
  item2Title.textContent = "Foie Gras au Sauternes";
  const item2Description = document.createElement("p");
  item2Description.textContent = "Seared foie gras with Sauternes reduction";
  item2.appendChild(item2Title);
  item2.appendChild(item2Description);

  const item3 = document.createElement("div");
  item3.classList.add("item");
  const item3Title = document.createElement("h4");
  item3Title.textContent = "Tartare de Saumon";
  const item3Description = document.createElement("p");
  item3Description.textContent = "Fresh salmon tartare with citrus and dill";
  item3.appendChild(item3Title);
  item3.appendChild(item3Description);

  section1.appendChild(item1);
  section1.appendChild(item2);
  section1.appendChild(item3);

  const section2 = document.createElement("div");
  section2.id = "section";

  const title2 = document.createElement("p");
  title2.classList.add("category");
  title2.textContent = "Plats Principaux (Main Courses)";
  section2.appendChild(title2);
  section2.appendChild(document.createElement("hr"));

  const item4 = document.createElement("div");
  item4.classList.add("item");
  const item4Title = document.createElement("h4");
  item4Title.textContent = "Filet de Bœuf Rossini";
  const item4Description = document.createElement("p");
  item4Description.textContent =
    "Beef tenderloin with foie gras and truffle sauce";
  item4.appendChild(item4Title);
  item4.appendChild(item4Description);

  const item5 = document.createElement("div");
  item5.classList.add("item");
  const item5Title = document.createElement("h4");
  item5Title.textContent = "Coquilles Saint-Jacques";
  const item5Description = document.createElement("p");
  item5Description.textContent = "Pan-seared scallops with beurre blanc";
  item5.appendChild(item5Title);
  item5.appendChild(item5Description);

  const item6 = document.createElement("div");
  item6.classList.add("item");
  const item6Title = document.createElement("h4");
  item6Title.textContent = "Canard à l’Orange";
  const item6Description = document.createElement("p");
  item6Description.textContent = "Roasted duck breast with orange glaze";
  item6.appendChild(item6Title);
  item6.appendChild(item6Description);

  section2.appendChild(item4);
  section2.appendChild(item5);
  section2.appendChild(item6);

  const section3 = document.createElement("div");
  section3.id = "section";

  const title3 = document.createElement("p");
  title3.classList.add("category");
  title3.textContent = "Fromages et Desserts (Cheese & Desserts)";
  section3.appendChild(title3);
  section3.appendChild(document.createElement("hr"));

  const item7 = document.createElement("div");
  item7.classList.add("item");
  const item7Title = document.createElement("h4");
  item7Title.textContent = "Sélection de Fromages Affinés";
  const item7Description = document.createElement("p");
  item7Description.textContent = "A curated selection of aged cheeses";
  item7.appendChild(item7Title);
  item7.appendChild(item7Description);

  const item8 = document.createElement("div");
  item8.classList.add("item");
  const item8Title = document.createElement("h4");
  item8Title.textContent = "Crème Brûlée à la Vanille";
  const item8Description = document.createElement("p");
  item8Description.textContent = "Classic vanilla bean crème brûlée";
  item8.appendChild(item8Title);
  item8.appendChild(item8Description);

  const item9 = document.createElement("div");
  item9.classList.add("item");
  const item9Title = document.createElement("h4");
  item9Title.textContent = "Tarte Tatin";
  const item9Description = document.createElement("p");
  item9Description.textContent = "Caramelized apple tart with Calvados cream";
  item9.appendChild(item9Title);
  item9.appendChild(item9Description);

  section3.appendChild(item7);
  section3.appendChild(item8);
  section3.appendChild(item9);

  menuContainer.appendChild(section1);
  menuContainer.appendChild(section2);
  menuContainer.appendChild(section3);

  content.appendChild(pageTitle);
  content.appendChild(menuContainer);
};

export { renderMenuPage };
