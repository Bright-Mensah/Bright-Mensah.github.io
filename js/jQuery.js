






    // if($(document).ready(function(){
    //     $('#nav-menu').on('click',function(){
    
    //         $('#nav').slideToggle();
    //     });
    
    // }));
    


    $(document).ready(function(){
        $('#nav-menu').on('click',function(){
            $('#nav').slideToggle();
        })
    })








// when the user  clicks on the item in the navigation list the navigation bar should toogle or slide up

$('#nav').click(function(){
   $('#nav').slideToggle();

});


   


   

    // $('#aboutMe').click(function(e){
    //     e.preventDefault(); // function declaration 
        
    //     // html,body here was here
    //     $('html,body').animate({
           
    //           scrollTop: $("#footer").offset().top
    //     },100);
    
    
        
    // });
    $('#aboutMe').click(function(){
        $('body').animate({
            scrollTop: $('#footer').offset().top
        },200);
    })


    



    $('#about').click(function(){ // function declaration 
    
        // html,body here was here
        
        $('html,body').animate({
            scrollTop: $('#footer').offset().top-200
        },200);
    
       
    });



$('#contact').click(() =>{ //arrow function
    // html,body here was here
    $('html,body').animate({
        scrollTop: $('.contact-us').offset().top-150
    },200);
});

$('#portfolio').click(() =>{// arrow function 
    // html,body here was here
    $(document).animate({

        scrollTop: $('.portfolio').offset().top-250
       
    },100);

    

    
});





$('.downArrow').click(() =>{
    // html,body here was here
    $('html,body').animate({
        scrollTop: $('#footer').offset().top
    },200);

});




