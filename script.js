// Set default tab and show related items
document.getElementById('drinks-tab').classList.add('active');
filterMenu('drinks');

window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const container = document.querySelector('.container');

    if (window.scrollY > 50) { // When user scrolls down past 50px
        header.classList.add('sticky');
        container.classList.add('sticky'); // Adjust container padding
    } else {
        header.classList.remove('sticky');
        container.classList.remove('sticky');
    }
});


// Filter Menu Items based on category selection
function filterMenu(category) {
    // Clear active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

    // Set active class on the selected tab
    document.getElementById(`${category}-tab`).classList.add('active');

    // Show or hide menu items based on category
    document.querySelectorAll('.menu-item').forEach(item => {
        if (item.classList.contains(category)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}
