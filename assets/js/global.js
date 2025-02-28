window.onload = function () {
    const tourMode = localStorage.getItem('tourMode');
    if (tourMode === 'true') {
        const fileManagerLink = document.querySelector('a[href="file-manager.html"]');
        if (fileManagerLink) fileManagerLink.style.display = 'none';
    }
}
