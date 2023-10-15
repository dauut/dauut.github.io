function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the requested page
    document.getElementById(`page-${pageNumber}`).style.display = 'block';

    // Update active state for pagination buttons
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.pagination a[data-page="${pageNumber}"]`).classList.add('active');
}