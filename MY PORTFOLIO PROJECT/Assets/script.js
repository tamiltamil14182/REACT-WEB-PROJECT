// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation for Contact Form
// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     // Get the form fields
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     // Simple validation
//     if (!name || !email || !message) {
//         alert('Please fill in all fields before submitting!');
//         return;
//     }

//     // Check if the email is valid using regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//         alert('Please enter a valid email address.');
//         return;
//     }

//     // Simulate form submission success
//     alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    
//     // Optionally clear form fields after submission
//     document.getElementById('name').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('message').value = '';
// });

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

 const navLinks = document.querySelectorAll('.nav-link');
// Loop through each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});

// About details
const toggleButton = document.getElementById('toggleDetailsBtn');
    const portfolioDetails = document.getElementById('portfolioDetails');

    toggleButton.addEventListener('click', () => {
      const isDetailsVisible = portfolioDetails.style.display === 'block';
      
      if (isDetailsVisible) {
        portfolioDetails.style.display = 'none';
        toggleButton.textContent = 'About';
        toggleButton.style.fontWeight = 'bold';
      } else {
        portfolioDetails.style.display = 'block';
        toggleButton.textContent = 'Hide About';
        toggleButton.style.fontWeight = 'bold';
      }
    });

    //Skill details
    const skillBtn = document.getElementById('skillBtn');
    const skillDetails = document.getElementById('skillDetails');

    skillBtn.addEventListener('click', () => {
      const isSkillDetails = skillDetails.style.display === 'block';
      
      if (isSkillDetails) {
        skillDetails.style.display = 'none';
        skillBtn.textContent = 'Skills';
        skillBtn.style.fontWeight = 'bold';
      } else {
        skillDetails.style.display = 'block';
        skillBtn.textContent = 'Hide Skills';
        skillBtn.style.fontWeight = 'bold';
      }
    });

    //Project details
    const projectBtn = document.getElementById('projectBtn');
    const projectDetails = document.getElementById('projectDetails');

    projectBtn.addEventListener('click', () => {
      const isprojectDetails = projectDetails.style.display === 'block';
      
      if (isprojectDetails) {
        projectDetails.style.display = 'none';
        projectBtn.textContent = 'project';
        projectBtn.style.fontWeight = 'bold';
      } else {
        projectDetails.style.display = 'block';
        projectBtn.textContent = 'Hide project';
        projectBtn.style.fontWeight = 'bold';
      }
    });

    //Contact details
    const contactBtn = document.getElementById('contactBtn');
    const contactDetails = document.getElementById('contactDetails');

    contactBtn.addEventListener('click', () => {
      const iscontactDetails = contactDetails.style.display === 'block';
      
      if (iscontactDetails) {
        contactDetails.style.display = 'none';
        contactBtn.textContent = 'contact';
        contactBtn.style.fontWeight = 'bold';
      } else {
        contactDetails.style.display = 'block';
        contactBtn.textContent = 'Hide contact';
        contactBtn.style.fontWeight = 'bold';
      }
    });
