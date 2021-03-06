let image = document.querySelector('#img');
let imageNo = 1;

let delay = 600;

mouseEntered = false;


image.addEventListener('mouseenter', function() {
   mouseEntered = true
})

image.addEventListener('ontouchstart', function() {
   mouseEntered = true
})

image.addEventListener('mouseleave', function() {
   mouseEntered = false;
   
   setTimeout(function() {
      window.requestAnimationFrame(step);
   }, delay)

})

image.addEventListener('ontouchend', function() {
   mouseEntered = false;
   
   setTimeout(function() {
      window.requestAnimationFrame(step);
   }, delay)

})


function updateImage(imageNo) {
   let image_url = '/assets/images/'+imageNo+'.jpg';

   image.setAttribute('src', image_url)
   
}

function step() {

   if (mouseEntered === false) {

      updateImage(imageNo);
      imageNo++;
    
      if (imageNo <= 57) {
         setTimeout(function() {
            window.requestAnimationFrame(step);
         }, delay)
        
      } else {
         imageNo = 1;
         
         setTimeout(function() {
            window.requestAnimationFrame(step);
         }, delay)
      }

   }

}

setTimeout(function() {
   window.requestAnimationFrame(step);
}, delay)



