document.querySelectorAll('.button-container').forEach(buttonContainer => {
  const gifOverlay = buttonContainer.querySelector('.gif-overlay img');

  if (gifOverlay) {
    gifOverlay.dataset.originalSrc = gifOverlay.src;
  }

  buttonContainer.addEventListener('mouseenter', () => {
    if (gifOverlay) {
      // Force reload of the gif by appending a timestamp to the src
      const originalSrc = gifOverlay.dataset.originalSrc;
      gifOverlay.src = originalSrc + '?cb=' + new Date().getTime();
      gifOverlay.onload = () => {
        // Once the image is loaded, make sure it is shown
        gifOverlay.style.opacity = 1;
      };
      buttonContainer.classList.add('hovered');
    }
  });

  buttonContainer.addEventListener('mouseleave', () => {
    if (gifOverlay) {
      // When the mouse leaves, hide the gif
      gifOverlay.style.opacity = 0;
    }
    buttonContainer.classList.remove('hovered');
  });
});

