var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Game Developer", "Vedio Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    });

let menuIcon = document.querySelector('#menu-icon');
let navber = document.querySelector('.navber'); 

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navber.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// sticky navbar

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon and navar when click navbar Link (scroll)
    
menuIcon.classList.remove('bx-x');
navber.classList.remove('active');
    
};


// =================scroll=============


// ScrollReveal({
//     reset: true,
//     distance:'80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('home-content, heading', { origin: 'top' });