// Stars background animation
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');

let stars = [];
let numStars = 100;

function initStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#C0C0C0';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function moveStars() {
  stars.forEach(star => {
    star.x += star.dx;
    star.y += star.dy;

    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  });
}


function animate() {
  drawStars();
  moveStars();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();
animate();
// Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });
  
  document.querySelectorAll('.fade-out').forEach(card => {
    observer.observe(card);
  });
  // Lightbox functionality
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    lightbox.style.display = "block";
    lightboxImg.src = src;
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
  }
  
  // Scroll fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  });
  
  document.querySelectorAll('.fade-out').forEach(item => {
    observer.observe(item);
  });
// Handle Contact Form Submission
function handleSubmit(event) {
    event.preventDefault();
  
    const responseMessage = document.getElementById('form-response');
    responseMessage.textContent = "Your message has been sent through the stars ✨";
  
    // Clear form fields (optional)
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
  
    return false;
  }
    
  