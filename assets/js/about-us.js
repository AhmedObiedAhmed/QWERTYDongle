document.addEventListener("DOMContentLoaded", () => {
    console.log("Responsive About Us page is fully loaded.");

    // Animate sections when they appear in the viewport
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) { // Trigger when 80% visible
                section.style.opacity = "1";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case sections are already visible
});
