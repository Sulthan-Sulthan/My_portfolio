// scroll sectionn
let menuIcon =document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
 window.onscroll = () =>{
    // sticky header
    section.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop -100;
        let height  = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset +height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+ id+']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');

        }
        
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


     menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
 }


 // Get the "Read More" button element.
const readMoreButton = document.querySelector('.read-more-button');

// Get the additional text element.
const moreText = document.querySelector('.more-text');

// Add an event listener to the "Read More" button.
readMoreButton.addEventListener('click', () => {
  // Toggle the visibility of the additional text.
  moreText.style.display = moreText.style.display === 'none' ? 'block' : 'none';

  // Change the text of the "Read More" button to reflect the new state.
  readMoreButton.textContent = moreText.style.display === 'none' ? 'Read More' : 'Read Less';
});



