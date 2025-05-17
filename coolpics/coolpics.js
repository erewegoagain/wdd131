const menuButton = document.querySelector(".dropbtn");
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog')
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 999) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

function enlargeImage(event) {
    const image = event.target.closest('img');
    const base = image.src.split('-')[0];
    const final = base + '-full.jpeg';
    modal.innerHTML = `
    <img src="${final}" alt="${image.alt}">
    <button class="close-viewer">X</button>
  `;
  modal.showModal()
    const close = modal.querySelector('.close-viewer');
    close.addEventListener('click', () => {
        modal.close();
});
}

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
})

gallery.addEventListener('click', enlargeImage) 