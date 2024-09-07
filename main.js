document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Message sent successfully!');
        // Here you can add code to send the form data to your server or email
        document.getElementById('contact-form').reset();
    }
});
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.dropdown');

    hamburger.classList.toggle('active');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// JavaScript for filtering portfolio items
document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('.filter-list li');
    const portfolioColumns = document.querySelectorAll('.portfolio-column');

    filterItems.forEach(item => {
        item.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Remove 'current' class from all filter items
            filterItems.forEach(i => i.classList.remove('current'));

            // Add 'current' class to the clicked filter item
            this.classList.add('current');

            // Show/Hide portfolio columns based on filter
            portfolioColumns.forEach(column => {
                if (filter === 'all' || column.classList.contains(filter)) {
                    column.style.display = 'block';
                } else {
                    column.style.display = 'none';
                }
            });
        });
    });

    // Trigger click event on the 'All' filter on page load
    document.querySelector('.filter-list li.current').click();
});


portfolioColumns.forEach(column => {
    if (filterValue === 'all' || column.classList.contains(filterValue)) {
        column.classList.add('show');
    } else {
        column.classList.remove('show');
    }
});


