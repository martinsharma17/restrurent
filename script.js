// Set default tab and show related items
document.getElementById('drinks-tab').classList.add('active');
filterMenu('drinks');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 50) {
        // Add the .scrolled class when scrolling down
        document.body.classList.add('scrolled');
    } else {
        // Remove the .scrolled class when back at the top
        document.body.classList.remove('scrolled');
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
