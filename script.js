document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const scrollCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(scrollCallback, {
        threshold: .9,
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});




// filepath: /c:/Users/shuja/OneDrive/Desktop/BusinessFinal/Businesscard-/my-new-repo/scripts.js
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.dropdown-button').addEventListener('click', function() {
        document.querySelector('.dropdown-content').classList.toggle('show');
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



const header = document.querySelector('header');
const popupContainer = document.querySelector('.popup-container');

header.addEventListener('mouseenter', () => {
    popupContainer.style.width = '200px';
    popupContainer.style.height = '200px';
    popupContainer.style.borderRadius = '10px';
    popupContainer.style.opacity = '1';
    popupContainer.style.visibility = 'visible';
});

header.addEventListener('mouseleave', () => {
    popupContainer.style.width = '50px';
    popupContainer.style.height = '50px';
    popupContainer.style.borderRadius = '50%';
    popupContainer.style.opacity = '0.7';
    popupContainer.style.visibility = 'hidden';
});
