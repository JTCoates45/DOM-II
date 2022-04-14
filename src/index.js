import './less/index.less'

// Your code goes here!
//1.
window.onload = function (evt) {
    // console.log(`event ${evt.type} Let's gooooooo`)
    const heading = document.querySelector('h1')
    heading.textContent = "This is the fun bus!"
//2.
    window.addEventListener('copy', () =>{
        navigator.clipboard.readText()
        .then(text => {
            console.log(text) 
        })
    })
//3    
    //click
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('big')
    })
//4.
    //mouseover event turns buttons green
    let funBus = document.getElementById("Color");
    Color.addEventListener("mouseenter", function( event ) {
            event.target.style.color = "green";
            setTimeout(function() {
              event.target.style.color = "";
            }, 500);
          }, true);
//5.
          //dbclick
   document.body.addEventListener('dblclick', evt =>{
    evt.target.outerHTML = "BEEP BEEP"
   })
   
//6.
//keydown
const log = document.getElementById('Color');
window.addEventListener('keydown', logKey);
function logKey(e) {
    log.textContent += `${e.code}`;
}
//7.
//mousemove
document.body.addEventListener('mousemove', evt =>{
const {clientX, clientY} = evt 
// console.log(`mouse is at", ${clientX}, ${clientY}`)

})
//8.
//mouseleave
//9 
//mouseenter
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontStyle = 'italic'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'bold'
})
}
//10
//wheel
// function zoom(event) {
//     event.preventDefault();
  
//     scale += event.deltaY * -0.01;
  
//     scale = Math.min(Math.max(.125, scale), 4);
  
//     el.style.transform = `scale(${scale})`;
//   }
  
//   let scale = 1;
//   const el = document.querySelector('body');
//   el.onwheel = zoom;
//commented out for sanity sake

  //10
  //click

  
}
