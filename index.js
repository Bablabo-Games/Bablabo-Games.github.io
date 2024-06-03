const header = document.getElementById('main-header');
const content = document.getElementById('content');

let headerOpaque = false;

function setHeaderOpaqueness() {
    if (window.scrollY >= 10 && !headerOpaque) {
        header.classList.add('header-opaque');
        headerOpaque = true;
    } else if (window.scrollY < 10 && headerOpaque) {
        header.classList.remove('header-opaque');
        headerOpaque = false;
    }
}

function onLoad() {
    document.addEventListener('scroll', setHeaderOpaqueness);
    setHeaderOpaqueness();
}