// ===================================
// MOBILE MENU TOGGLE
// ===================================

const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Close mobile menu
function closeMenu() {
    hamburger.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

// Close menu when nav link is clicked (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closeMenu();
        }
    });
});

// ===================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ===================================

// Function to update active nav link based on scroll position
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + 150; // Offset for better UX
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to current section's link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveNav);

// Initial call to set active nav on page load
updateActiveNav();

// ===================================
// EMAIL REVEAL
// ===================================

const emailBtn = document.getElementById('email-btn');
const emailDisplay = document.getElementById('email-display');

if (emailBtn && emailDisplay) {
    emailBtn.addEventListener('click', function() {
        // Replace with your actual email
        const email = 'jamison.warren@colostate.edu';
        
        emailDisplay.innerHTML = `<a href="mailto:${email}">${email}</a>`;
        emailDisplay.style.display = 'block';
        emailBtn.style.display = 'none';
    });
}