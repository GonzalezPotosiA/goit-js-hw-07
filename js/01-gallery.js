import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery= document.querySelector('.gallery');


galleryItems.forEach(({preview, original, description}) => {
    const item=document.createElement('div');
    item.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href=original;

    const picture=document.createElement('img');
    picture.classList.add('gallery__image');
    picture.src=preview;
    picture.setAttribute('data-source', original);
    picture.setAttribute('alt', description);
    
    link.appendChild(picture);
    item.appendChild(link);
    gallery.appendChild(item);

    link.addEventListener('click', (event)=>{
        event.preventDefault();
        const instance = basicLightbox.create(`<img src="${original}">`);
        instance.show();
    });


});
