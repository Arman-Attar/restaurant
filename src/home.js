import homeImage from "./images/home.jpg";

const renderHomePage = () => {
  const content = document.getElementById("content");

  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Home";
  const homeInfo = document.createElement("div");
  homeInfo.classList.add("home-info");
  const paragraph = document.createElement("p");
  paragraph.id = "description";
  paragraph.textContent =
    "A sanctuary of elegance and refinement, Château Blanc offers a luxurious dining experience inspired by French grandeur. Nestled in an opulent setting of pristine white décor, gilded accents, and candlelit ambiance, every detail evokes the charm of a noble estate. Our menu, crafted with the finest ingredients and timeless techniques, celebrates the artistry of haute cuisine. Whether indulging in exquisite wines or savoring delicate flavors, each visit to Château Blanc is a journey into sophistication and culinary excellence.";
  const image = document.createElement("img");
  image.src = homeImage;
  homeInfo.appendChild(paragraph);
  homeInfo.appendChild(image);

  content.appendChild(pageTitle);
  content.appendChild(homeInfo);
};
export { renderHomePage };
