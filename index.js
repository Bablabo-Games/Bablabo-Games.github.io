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
  '1. Bedroom.jpg',
  '2. Bus Intro.jpg',
  '3. Walking.jpg',
  '4. Walking.jpg',
  '5. Task Interaction.jpg',
  '6. Button Mashing.jpg',
  '7. NPC Spreading Gossip.jpg',
  '8. Annoying Kid.jpg',
  '9. Influencer Intro.jpg',
  '10. Influencer Minigame.jpg'
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