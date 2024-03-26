/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const ulBar = document.querySelector('#navbar__list');
const allSec = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function removeClassActiveOfli(){
  document.querySelectorAll('li.your-active-class').forEach((item) => {
    item.classList.remove('your-active-class');
  });
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav  // Scroll to anchor ID using scrollTO event

allSec.forEach((section) => {
  const dataNavText = section.getAttribute('data-nav');
  const li = document.createElement('li');
  li.textContent = dataNavText;
  li.addEventListener('click',()=>{
    section.scrollIntoView();
    removeClassActiveOfli();
    li.classList.add('your-active-class');
  });
  fragment.appendChild(li);
  });
ulBar.appendChild(fragment);

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll',()=>{
  allSec.forEach((activeSec) => {
  const rectangle = activeSec.getBoundingClientRect();
  if(rectangle.top >=0 && rectangle.top<= 200){
    allSec.forEach((section) => {
      section.classList.remove('your-active-class');
    });
    activeSec.classList.add('your-active-class');
    document.querySelectorAll('li').forEach((item) => {
      if(activeSec.getAttribute('data-nav')==item.textContent){
        item.classList.add('your-active-class');
      }else{
        item.classList.remove('your-active-class');
      }
    });

  }
 });
});





/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
