$(document).ready(function() {
    $('.filter-list a').click(function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        var filterValue = $(this).attr('data-filter'); // Get the filter data attribute from the clicked link

        // Remove 'current' class from all filter links
        $('.filter-list a').removeClass('current');

        // Add 'current' class to the clicked link
        $(this).addClass('current');

        // Filter portfolio items
        if (filterValue == '*') {
            $('.portfolio-column').show(); // Show all items
        } else {
            $('.portfolio-column').hide(); // Hide all items first
            $(filterValue).show(); // Then show only the items that match the filter
        }
    });
});

