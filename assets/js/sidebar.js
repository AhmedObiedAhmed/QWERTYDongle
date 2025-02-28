// Function to load the sidebar component
function loadSidebar() {
    fetch('../components/sidebar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('sidebar-container').innerHTML = html;

            // Check if user is logged in from localStorage
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

            // Show or hide "File Manager" based on login state
            const fileManagerTab = document.getElementById('file-manager-tab');
            if (fileManagerTab) {
                fileManagerTab.style.display = isLoggedIn ? 'block' : 'none';
            }

            // Add event listeners only after sidebar is loaded
            setupSidebarLinks();
        })
        .catch(error => console.error('Error loading sidebar:', error));
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}

// Function to retract sidebar when a link is clicked
function setupSidebarLinks() {
    const sidebarLinks = document.querySelectorAll('#sidebar ul li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.add('hidden');
        });
    });
}

// Ensure sidebar loads when the page loads
document.addEventListener('DOMContentLoaded', loadSidebar);
