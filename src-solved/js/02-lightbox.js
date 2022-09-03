import { galleryItems as galleryData } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("body > ul.gallery");

function makeCard({ preview, original, description }) {
  /*
```html
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
```
*/
  const elements = {
    elementA: document.createElement("a"),
    elementImg: document.createElement("img"),
  };
  elements.elementA.classList.add("gallery__item");
  elements.elementA.href = original;
  elements.elementImg.classList.add("gallery__image");
  elements.elementImg.src = preview;
  elements.elementImg.alt = description;
  elements.elementA.appendChild(elements.elementImg);
  return elements;
}

for (const currentImageData of galleryData) {
  const card = makeCard(currentImageData);
  galleryContainer.appendChild(card.elementA);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
