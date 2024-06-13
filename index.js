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