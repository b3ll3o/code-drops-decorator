export default Photo => {

  Photo.cropButton = document.getElementById('crop-image');

  Photo.crop = () => {
    const { width: imageWidth, height: imageHeight } = Photo.image;
    const { width: photoPreviewWidth, height: photoPreviewHeight } = Photo.photoPreview;
  
    const [ widthFactory, heightFactory ] = [
      +(imageWidth / photoPreviewWidth), 
      +(imageHeight / photoPreviewHeight)
    ];
    
    const [ selectionWidth, selectionHeight ] = [
      +Photo.selection.style.width.replace('px', ''), 
      +Photo.selection.style.height.replace('px', '')
    ];
  
    const [ croppedWidth, croppedHeight ] = [
      +(selectionWidth * widthFactory), 
      +(selectionHeight * heightFactory)
    ];
  
    const [ actualX, actualY ] = [
      +(Photo.relativeStartX * widthFactory), 
      +(Photo.relativeStartY * heightFactory)
    ];
  
    const croppedImage = Photo.ctx.getImageData(actualX, actualY, croppedWidth, croppedHeight);
  
    Photo.ctx.clearRect(0, 0, Photo.ctx.width, Photo.ctx.height);
  
    Photo.image.width = Photo.canvas.width = croppedWidth;
    Photo.image.height = Photo.canvas.height = croppedHeight;
  
    Photo.ctx.putImageData(croppedImage, 0, 0);
  
    Photo.selection.style.display = 'none';
  
    Photo.photoPreview.src = Photo.canvas.toDataURL();
  
    Photo.downloadButton.style.display = 'initial';
  }
}