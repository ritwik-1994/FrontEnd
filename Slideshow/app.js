document.querySelector('.banner button').addEventListener('click', () => {
    document.querySelector('.banner').style.display = 'none';    
    document.querySelector('.slideshow-wrapper').style.cssText = 'opacity: 1; visibility: visible;';
    document.querySelector('.slideshow').style.cssText = 'animation : slideshowAnim 10s .5s infinite;'
});










