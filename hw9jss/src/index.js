import './styles.css'
import gallery_items from './gallery_items';
import { refs } from './refs';
const galleryElements = gallery_items.reduce(
  (acc,el)=>
  (acc += `<li class="gallery__item"><img class="gallery__image"src="${el.preview}" data-source="${el.original}" alt="${el.description}"</li>`),
  ""
);
refs.galleryItems.innerHTML = galleryElements;
function eventHandler({target}){
  if(target.dataset.source){
    refs.modal.classList.add('is-open');
    refs.lightboxImage.setAttribute('src', target.dataset.source);
    refs.lightboxImage.setAttribute('alt',target.alt);
  } else if(target.dataset.action === "close-l")
};
refs.body.addEventListener('click', eventHandler);








