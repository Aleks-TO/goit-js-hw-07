import { galleryItems } from "./gallery-items.js";

// Change code below this line
// імпорт нашої підключеної бібліотеки
// import * as basicLightbox from "basiclightbox";

// Створюємо розмітку з допомогою методів мар, після якого визодить масив з елементів розмітки, додаємо метод join для обэднання в одну
const galleryMarkup = galleryItems
	.map(
		galleryItem => `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
    />
    </a>
    </div>
    `,
	)
	.join("");

console.log(galleryMarkup);

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
	// const instance = basicLightbox.create(`
	//     <img src="${imgRef.dataset.source}" width="800" height="600">
	// `);

	// instance.show();

	console.log(event.target);
}
