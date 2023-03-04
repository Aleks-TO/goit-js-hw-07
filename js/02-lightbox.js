import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// Створюємо розмітку з допомогою методів мар, після якого визодить масив з елементів розмітки, додаємо метод join для обэднання в одну
const galleryMarkup = galleryItems
	.map(
		galleryItem => `
        <a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>
        `,
	)
	.join("");

// console.log(galleryMarkup);

// Знайдемо посилання на дів галереї
const galleryEl = document.querySelector(".gallery");

// Додамо нашу розмітку в документ
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

//Додоаэмо на наш div з галереєю слухача події на клік

galleryEl.addEventListener("click", handleImageFullScreen);

function handleImageFullScreen(event) {
	event.preventDefault();
	const imgRef = event.target;
	if (imgRef.nodeName !== "IMG") {
		return;
	}

	let lightbox = new SimpleLightbox(".gallery a", {
		captionsData: "alt",
		captionDelay: 250,
	});
}
