const scrollContainer = document.getElementById("#main");
scrollContainer.addEventListener("wheel", (evt) => {
evt.preventDefault();
scrollContainer.scrollLeft += evt. deltaY;
});

document.addEventListener('DOMContentLoaded', function() {
    var currentLocation = window.location.href;

    document.querySelectorAll('nav-a').forEach(function(navLink) {
    if (navLink.href === currentLocation) {
        navLink.classList.add('active');
    }
    });
});
