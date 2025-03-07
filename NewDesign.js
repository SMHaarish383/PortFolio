//animation for project Section

document.addEventListener("DOMContentLoaded", function() {
     const projectSection = document.querySelector('.Projects');
 
     function revealProject() {
         if (window.scrollY > projectSection.offsetTop - window.innerHeight + 100) {
             projectSection.classList.add('show');
         }
     }
     window.addEventListener('scroll', revealProject);
 });

 //animation for Skill section
document.addEventListener("DOMContentLoaded", function() {
     const projectSection = document.querySelector('.MySkills');
 
     function revealProject() {
         if (window.scrollY > projectSection.offsetTop - window.innerHeight + 100) {
             projectSection.classList.add('show');
         }
     }
     window.addEventListener('scroll', revealProject);
 });

 //animation for WorkShop Section
 document.addEventListener("DOMContentLoaded", function() {
      const worElements = document.querySelectorAll(".Wor");
      
      function revealOnScroll() {
           worElements.forEach((element) => {
                if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                     element.classList.add("show");
                    }
               });
          }
          
          window.addEventListener("scroll", revealOnScroll);
          revealOnScroll(); // Run once to check initial position
     });
 
 
 //Project text fade-in-out
     document.addEventListener("DOMContentLoaded", function() {
      const worElements = document.querySelectorAll(".FadeUpProject");
      
      function revealOnScroll() {
           worElements.forEach((element) => {
                if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                     element.classList.add("show");
                    }
               });
          }
          
          window.addEventListener("scroll", revealOnScroll);
          revealOnScroll(); // Run once to check initial position
     });




