class Sidebar {
    constructor(containerId, sidebarUrl) {
        this.containerId = containerId; // Where the sidebar will be injected
        this.sidebarUrl = sidebarUrl;  // URL for sidebar.html
        this.sidebar = null;           // Reference to the sidebar element
    }

    // Load the sidebar HTML content
    load() {
        fetch(this.sidebarUrl)
            .then(response => response.text())
            .then(html => {
                // Inject the sidebar into the container
                document.getElementById(this.containerId).innerHTML = html;
                this.sidebar = document.getElementById('sidebar'); // Reference to the sidebar
                this.initialize();
            })
            .catch(error => console.error('Error loading sidebar:', error));
    }

    // Initialize sidebar functionality
    initialize() {
        // Setup toggle button functionality
        const toggleButton = document.getElementById('sidebar-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                this.sidebar.classList.toggle('hidden');
            });
        }

        // Check login state and manage "File Manager" tab visibility
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const fileManagerTab = document.getElementById('file-manager-tab');
        if (fileManagerTab) {
            fileManagerTab.style.display = isLoggedIn ? 'block' : 'none';
        }

        // Ensure sidebar retracts when a link is clicked
        this.setupLinks();
    }

    // Add behavior for sidebar links
    setupLinks() {
        const links = document.querySelectorAll('#sidebar ul li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                this.sidebar.classList.add('hidden');
            });
        });
    }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = new Sidebar('sidebar-container', '../components/sidebar.html');
    sidebar.load();
});