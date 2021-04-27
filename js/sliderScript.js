// slider container to display all the images on the slider
const slides = document.querySelector('.slider').children;
// the prev icon on the slider
const prev = document.querySelector('.prev');
// the  next icon on the slider
const next = document.querySelector('.next');
// the indicator for the slider
const indicator = document.querySelector('.indicator');
// used to add the image on the slider
let index = 0;
/* when the user clicks on the prev  
 will let the image move back */
prev.addEventListener('click',() =>{ // Arrow function for the prev arrow
    prevSlide();
    updateCircleIndicator();
    resetTimer();
    
    


});

// prevSlide let the image moves backwards
const prevSlide = function () { // function expression
    if(index ==0){
        // if the image position =0
        // then get or navigate to the  position of the image
        index = slides.length -1;

    }
    else{
        // else moves the image backwards
        index--;
    }
     /* if the item reaches to the last point it should remove the active 
     and restart the whole process again or add active to the current item that the user clicks on 
     */
    changeSlide();
    
}

/* when the user clicks on the next  
 will let the image move to next */
 next.addEventListener('click', ()=>{
     nextSlide();
     updateCircleIndicator();
     resetTimer();

 });

 // nextSlide let the image moves forward or next
 const nextSlide = ()=>{
     // if the image position is the last
     // then start from the beginning
     if(index == slides.length -1){
         index =0;


     }
     else{
         //else continue sliding
         index++;

     }
     /* if the item reaches to the last point it should remove the active 
     and restart the whole process again or add active to the current item that the user clicks on 
     */
     changeSlide();
 }

 function changeSlide(){
     /* if the item reaches to the last point it should remove the active 
     and restart the whole process again 
     */
     for(let i=0; i<slides.length; i++){
         slides[i].classList.remove('active');
     }
     /* add active to all of the slides  to display all of them 
     when the user clicks on the next button or arrow
     */
    slides[index].classList.add('active');
 }


//  create circle indicators

const circleIndicator = ()=>{
    // get the position for the slides
    for(let i=0; i<slides.length;i++){
        /*create the indicator element using the div 
         for the indicator class*/
        const div = document.createElement('div');
        //   i starting from 0
        div.innerHTML = i+1;

        // set attribute to the div element
        div.setAttribute('onclick','indicateSlide(this)');
        div.id=i;
        if(i==0){
            /* if the position of the indicator is 0 
            then it should active to the indicator class
            */
            div.className ='active';
        }
        indicator.appendChild(div);
    }
}

// indicate Slide 
function indicateSlide(element){
    /* the index should be equal to 
    the indicator on the slider
    */
    index = element.id;
    // change slider
    changeSlide();
    // and update indicator when slider changes
    updateCircleIndicator();

}
// updateCircleInidicator

let updateCircleIndicator = function(){
    for(i=0; i<indicator.children.length;i++){
        indicator.children[i].classList.remove('active');
    }
    // add active to the indicators to change with the slides
    indicator.children[index].classList.add('active');

}

// call circleIndicator here
circleIndicator();


// resetTimer
function resetTimer(){
    // when click on indicator it should stop
    clearInterval(timer);
    // and start timer again
    timer = setInterval(() => {
        autoPlay()
    } , 4000);
}

// autoPlay slider
const autoPlay = ()=>{
    nextSlide();
    updateCircleIndicator();
}
// slider should change 4 seconds
let timer = setInterval(() => {
    autoPlay()
}, 4000);


function hover(){
    clearTimeout(timer);
  
    
}
let hoverOut = () =>{
    resetTimer();
}
