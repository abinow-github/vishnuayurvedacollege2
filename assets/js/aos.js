// Get all elements with the class 'anime'
const elements = document.querySelectorAll('.anime');

// Define the options for the Intersection Observer
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

// Create a new Intersection Observer for each element
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    // If element is in viewport, add the 'animated' class to trigger the animation
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, options);

// Start observing each element
elements.forEach(element => {
  observer.observe(element);
});
