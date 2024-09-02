document.getElementById('btn-submit').addEventListener('click', function() {
    const searchInput = document.getElementById('search');
    if (searchInput.classList.contains('hidden')) {
        searchInput.classList.remove('hidden');
        searchInput.classList.add('show');
    }
});
