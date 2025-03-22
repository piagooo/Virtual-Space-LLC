$(document).ready(function () {
    $(".owl-carousel").each(function () {
        $(this).owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 2,
                    autoWidth: true,
                },
                600: {
                    items: 4,
                },
                1000: {
                    items: 4,
                },
            },
        });
    });
});

function goToPage(url) {
    window.location.href = url;
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    
    var darkModeIcon = document.getElementById('darkModeIcon');
    darkModeIcon.classList.toggle('fa-moon');
    darkModeIcon.classList.toggle('fa-sun');
}

function toggleExpand(containerId) {
    var postContainer = document.getElementById(containerId);

    postContainer.classList.toggle('expanded');

    var button = postContainer.querySelector('.toggle-button');
    button.innerHTML = postContainer.classList.contains('expanded') ? '<i class="fas fa-chevron-up"></i>' : '<i class="fas fa-chevron-down"></i>';
}