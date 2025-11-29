// Simple entrance animation on load & scroll
    document.addEventListener('DOMContentLoaded', () => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.fade-up').forEach((el, idx) => {
          setTimeout(()=> el.classList.add('on'), idx*80);
        });
      });
    });

    // Smooth nav scrolling
    document.querySelectorAll('nav.topnav a').forEach(a=>{
      if(!a.hash) return;
      a.addEventListener('click', e=>{
        e.preventDefault();
        document.querySelector(a.hash).scrollIntoView({behavior:'smooth',block:'start'});
      });
    });

    // Contact form (demo)
    document.getElementById('sendBtn').addEventListener('click', () => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const msgBox = document.getElementById('formMessage');

      if(!name || !email || !message){
        msgBox.style.color = '#ff7e7e';
        msgBox.textContent = 'Please fill all fields.';
        return;
      }
      // Basic email check
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!re.test(email)){
        msgBox.style.color = '#ff7e7e';
        msgBox.textContent = 'Please enter a valid email.';
        return;
      }

      // Simulate send
      msgBox.style.color = '#b9ffdd';
      msgBox.textContent = 'Thanks — message sent.';
      setTimeout(()=>{ msgBox.textContent = ''; document.getElementById('contactForm').reset(); }, 2500);
    });

    // If avatar.png not found it will gracefully fallback (see onerror handler in img tag)