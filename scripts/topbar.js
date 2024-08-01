
export function initializeTopbar() {
    const closeButton = document.querySelector('.close-button');
    const topbar = document.querySelector('.topbar');
    
    if (closeButton && topbar) {
      closeButton.addEventListener('click', () => {
        topbar.style.display = 'none'; // gizlemek için
      });
    }
  }