export default Photo => {

  Photo.photoPreview = document.getElementById('photo-preview');
  
  Photo.preview = () => {  
    Photo.photoPreview.src = Photo.canvas.toDataURL();
  }
}