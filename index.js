document.getElementById('check').addEventListener('change', function() {
      const barsIcon = document.querySelector('.checkbtn .fa-bars');
      const timesIcon = document.querySelector('.checkbtn .fa-times');
      
      if(this.checked) {
        barsIcon.style.display = 'none';
        timesIcon.style.display = 'block';
      } else {
        barsIcon.style.display = 'block';
        timesIcon.style.display = 'none';
      }
    });


  // 

  const texts = [
    "Where energy meets expertise.",
    "We provide solutions for simple/complex problems.",
    "We light the way in electrical/electronic fields.",
    "Driven by Power. Focused on Precision.",
    "Our services are smart, safe and professional."
  ];

  const textElement = document.getElementById("rotating-text");
  let index = 0;

  function showText() {
    textElement.style.animation = "fadeOutDown 1s ease forwards";

    setTimeout(() => {
      textElement.textContent = texts[index];
      textElement.style.animation = "fadeInUp 1s ease forwards";
      index = (index + 1) % texts.length;
    }, 1000); // Wait for fade-out before changing text
  }

  // Initial load
  window.addEventListener('DOMContentLoaded', () => {
    textElement.style.animation = "fadeInUp 1s ease forwards";
    setInterval(showText, 4000); // Runs every 4 seconds
  });


 


const scrollUp = document.querySelector('div.scrollUp');
              
              scrollUp.addEventListener('click', () => {
                  document.body.scrollTop = 0;
                  document.documentElement.scrollTop = 0;
              })

 $(window).scroll(function(){
              if($(window).scrollTop() > 200){
                  $('div.scrollUp').fadeIn(300);
              }else{
                  $('div.scrollUp').fadeOut(300);
              }
  });

  // Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    const copyrightElement = document.querySelector('.copyrightText p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace(/2025/, currentYear);
    }
});


    function updateLiveClock() {
        const now = new Date();

        // Format time (24-hour format: HH:MM:SS)
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        // Format date (e.g., "June 24, 2025")
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('en-US', options);

        // Update the DOM
        const clockElement = document.getElementById('live-clock');
        const dateElement = document.getElementById('live-date');

        if (clockElement) clockElement.textContent = timeString;
        if (dateElement) dateElement.textContent = dateString;
    }

    // Run immediately and update every second
    updateLiveClock();
    setInterval(updateLiveClock, 1000); 
    
    
$('a#podcast').click(function(e){
  e.preventDefault()
  alert('Sorry our team is currently working on this section and will be available. You can follow our social pages for the latest update. Thank you.')
});

('a.podcast').click(function(e){
  e.preventDefault()
  alert('Sorry our team is currently working on this section and will be available. You can follow our social pages for the latest update. Thank you.')
});
