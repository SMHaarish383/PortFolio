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
     
     // Internship Content fade in 
     document.addEventListener("DOMContentLoaded", function() {
          const worElements = document.querySelectorAll(".inter-para-contant");
          
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

// Internship fad-in effect
     document.addEventListener("DOMContentLoaded", function() {
          const projectSection = document.querySelector('.InternshipBack');
      
          function revealProject() {
              if (window.scrollY > projectSection.offsetTop - window.innerHeight + 100) {
                  projectSection.classList.add('show');
              }
          }
          window.addEventListener('scroll', revealProject);
      });
     // Internship Heading fade in 
     
     document.addEventListener("DOMContentLoaded", function() {
          const worElements = document.querySelectorAll(".internHead-div");
          
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



     // about me sectiont fade in effect
     document.addEventListener("DOMContentLoaded", function() {
          const projectSection = document.querySelector('.about-img');
      
          function revealProject() {
              if (window.scrollY > projectSection.offsetTop - window.innerHeight + 100) {
                  projectSection.classList.add('show');
              }
          }
          window.addEventListener('scroll', revealProject);
      });

      document.addEventListener("DOMContentLoaded", function() {
          const aboutElements = document.querySelectorAll(".about-img, .about-content");
      
          function revealOnScroll() {
              aboutElements.forEach((element) => {
                  if (element.getBoundingClientRect().top < window.innerHeight - 100) {
                      element.classList.add("show");
                  }
              });
          }
      
          window.addEventListener("scroll", revealOnScroll);
          revealOnScroll(); // Run once to check initial position
      });




//for text transition for hero block
document.addEventListener("DOMContentLoaded", function () {
     const aniElement = document.getElementById("Ani");
     const ani2Element = document.getElementById("Ani2");
 
     // Constant text
     aniElement.textContent = " Looking for a";
 
     // Rotating text options
     const roles = [" Software Developer ", " Full Stack Developer ", " Software Engineer ", " Java Developer "," Web Developer"];
     let index = 0;
 
     function changeText() {
         ani2Element.style.opacity = 0; // Fade out
 
         setTimeout(() => {
             ani2Element.textContent = roles[index]; // Change text
             ani2Element.style.opacity = 1; // Fade in
             index = (index + 1) % roles.length; // Loop through roles
         }, 500); // Wait for fade-out to complete
     }
 
     setInterval(changeText, 2500); // Change text every 2.5 seconds
 });


//  Education section

document.addEventListener("DOMContentLoaded", function() {
     const projectSection = document.querySelector('.Education-section');
 
     function revealProject() {
         if (window.scrollY > projectSection.offsetTop - window.innerHeight + 100) {
             projectSection.classList.add('show');
         }
     }
     window.addEventListener('scroll', revealProject);
 });
 

 document.addEventListener("DOMContentLoaded", function() {
     const projectSection = document.querySelector('.Education-para-container');
 
     function revealProject() {
         if (window.scrollY > projectSection.offsetTop - window.innerHeight + 100) {
             projectSection.classList.add('show');
         }
     }
     window.addEventListener('scroll', revealProject);
 });
      
      