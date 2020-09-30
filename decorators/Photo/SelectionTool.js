export default Photo => {

  Photo.selection = document.getElementById('selection-tool');
  Photo.startSelection = false;

  const events = {
    mousedown(){
      const { clientX, clientY, offsetX, offsetY } = event;

      Photo.startX = clientX;
      Photo.startY = clientY;
      Photo.relativeStartX = offsetX;
      Photo.relativeStartY = offsetY;

      Photo.startSelection = true;
    }, 
    mouseover(){
      this.style.cursor = 'crosshair';
    }, 
    mousemove(){
      const { clientX, clientY } = event;

      Photo.endX = clientX;
      Photo.endY = clientY;

      if(Photo.startSelection) {
        Photo.selection.style.display = 'initial';
        Photo.selection.style.top = `${Photo.startY}px`;
        Photo.selection.style.left = `${Photo.startX}px`;

        Photo.selection.style.width = `${Photo.endX - Photo.startX}px`;
        Photo.selection.style.height = `${Photo.endY - Photo.startY}px`;
      }
    }, 
    mouseup(){
      Photo.startSelection = false;

      const { layerX, layerY } = event;

      Photo.relativeEndX = layerX;
      Photo.relativeEndY = layerY;

      Photo.cropButton.style.display = 'initial';
    }
  }

  Object.keys(events)
    .forEach(eventName => {
      Photo.photoPreview.addEventListener(eventName, events[eventName]);
    });
}