import { galleryItems as galleryData } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("body > div.gallery");
const lightBoxWrapper = document.createElement("div");
const lightBoxElement = document.createElement("img");
lightBoxWrapper.appendChild(lightBoxElement);
lightBoxWrapper.style.width = "95vw";
lightBoxWrapper.style.height = "95vh";
lightBoxElement.style.width = "100%";
lightBoxElement.style.height = "auto";

const lightBoxInstance = basicLightbox.create(lightBoxWrapper);

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape" && lightBoxInstance.visible())
    lightBoxInstance.close();
});

for (const currentImageData of galleryData) {
  /* want template
```html
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
```
    * */
  let previewDiv = document.createElement("div");
  let previewA = document.createElement("a");
  let previewImage = document.createElement("img");

  previewImage.classList.add("gallery__image");
  previewImage.src = currentImageData.preview;
  previewImage.alt = currentImageData.description;
  previewImage.dataset.source = currentImageData.original;
  previewA.classList.add("gallery__link");
  previewA.href = currentImageData.original;
  previewA.addEventListener("click", function (e) {
    e.preventDefault();
  });
  previewDiv.classList.add("gallery_item");

  previewDiv.appendChild(previewA);
  previewA.appendChild(previewImage);
  galleryContainer.appendChild(previewDiv);

  previewImage.addEventListener("click", function () {
    lightBoxElement.alt = currentImageData.description;
    lightBoxElement.src = currentImageData.original;

    lightBoxInstance.show();
  });
}
