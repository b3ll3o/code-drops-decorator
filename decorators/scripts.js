import Photo from './Photo/index.js';

window.addEventListener('DOMContentLoaded', () => {
  Photo.load();
});

document.getElementById('select-image')
  .onclick = () => {
    document.getElementById('photo-file').click();
  }; 

Photo.cropButton.onclick = () => Photo.crop();

Photo.downloadButton.onclick = () => Photo.download();

