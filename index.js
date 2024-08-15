const header = document.getElementById('main-header');
const everything = document.getElementById('everything');

let headerOpaque = false;

function setHeaderOpaqueness() {
  if (everything.scrollTop >= 10 && !headerOpaque) {
    header.classList.add('header-opaque');
    headerOpaque = true;
  } else if (everything.scrollTop < 10 && headerOpaque) {
    header.classList.remove('header-opaque');
    headerOpaque = false;
  }
}

function onLoad() {
  everything.addEventListener('scroll', setHeaderOpaqueness);
  setHeaderOpaqueness();
}

const imgFiles = [
  '1. Gossip.png',
  '2. Bus.png',
  '3. Task.png',
  '5. Physics Lab.png',
  '6. Sports Room.png',
  '7. Library.png',
  '8. Button Mashing.png',
  '11. Drinking Water.png',
  '13. Influencer Intro.png',
  '14. Influencer Minigame.png'
]

function loadGallery() {
  console.log('Loading Gallery Images')
  const galleryContainer = document.getElementById('gallery-container');
  
  for (let i = 0; i < imgFiles.length; i++) {
    const src = 'res/img/presskit/' + imgFiles[i];  // Used for offline
    console.log();

    let img = document.createElement('img');
    img.src = src;
    img.alt = 'Screenshot ' + i;
    img.loading = 'lazy'
    img.classList.add('gallery-image');
    galleryContainer.appendChild(img);
  }
}