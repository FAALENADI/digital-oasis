document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle for Mobile Navigation
  const hamburger = document.getElementById('hamburger');
  const navList = document.getElementById('nav-list');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 70,  // Adjust based on header height
        behavior: 'smooth'
      });
      // Close menu on mobile after clicking a link
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
    });
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      // Simulate a successful submission (replace with actual AJAX/post handling)
      alert('Thank you ' + name + ', your message has been sent!');
      this.reset();
    });
  }
});
