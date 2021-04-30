


    // submit button
    const btnSubmit = document.getElementById('btnSubmit');

    
    
    btnSubmit.addEventListener('click',function(){
        console.log('clicked');

        const username = document.getElementById('name').value;
        const subject  = document.getElementById('subject').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const country = document.getElementById('country').value;
        const message = document.getElementById('message').value;
        const errorMessage = document.getElementById('error_message');


        // firebase database
        // sending contact form into your database
        const database = firebase.database();

        function connectDatabase(){

        database.ref('/Sender/' + phone).set({
    
            UserName: username,
            subject:subject,
            Phone: phone,
            Email: email,
            Country: country,
            Message: message
        });

}

       

    
    
       

        // function to be used in all fiedls
    
        function errorFileds (bg,text,color){
            errorMessage.style.padding ='14px';
            errorMessage.style.justifyContent ='center';
            errorMessage.innerHTML = text;
            errorMessage.style.backgroundColor = bg;
            errorMessage.style.color = color;
            errorMessage.style.fontSize ='16px'
            errorMessage.style.fontWeight ='normal';
        

        }

        // successfully mesage sent snackbar toast
        function ToastSuccessfulMessage() {
            // Get the snackbar DIV
            var x = document.getElementById("snackbar");
          
            // Add the "show" class to DIV
            x.className = "show";
          
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);   
          }

        //   message wasnt sent toast
        let ToastErrorMessage = () =>{
            var x = document.getElementById("snackbar");
          
            x.innerHTML=`Message wasn't sent, check your internet connection`;
            // set color 
            x.style.backgroundColor='red';
            // Add the "show" class to DIV
            x.className = "show";
          
            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000); 

        }
        
      


        // js for progress bar
           
        let i = 0;
        function successfulMessageSentProgressBar() {
            errorMessage.remove();
            btnSubmit.style.display='none';
            document.getElementById('myProgress').style.display='flex';

            
          if (i == 0) {
            i = 1;
            let elem = document.getElementById("myBar");
            let width = 10;
            let id = setInterval(frame, 200);
            
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
                ToastSuccessfulMessage();
                
                setTimeout(() => {
                                   
                    window.location.reload();
                }, 3000);
              } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + '%';
              }
            }
          }
        }


        
        /* when theres no internet connection 
         display the progressBar to let the user check 
         his or her errors
         */
            
        let p = 0;
        function MessageNotSentProgressBar() {
            errorMessage.style.display='none';
            btnSubmit.style.display='none';
            document.getElementById('myBar').style.display='block';
            document.getElementById('myProgress').style.display='flex';
            
          if (p == 0) {
            p = 1;
            let elem = document.getElementById("myBar");
            let width = 10;
            let id = setInterval(frame, 200);
            
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                p = 0;
               
                ToastErrorMessage();
                document.getElementById('myBar').style.display='none';
                btnSubmit.style.display='block';

                
                
              } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + '%';
              }
            }
          }
        }

        
        

              
        if(username ==="" || username ===undefined){
           
            errorFileds('red',`Please username can't be empty`,'white');

            return false;
            
        }
        else if(username.length <=5){
           
            errorFileds('yellow',`Please name should have more than 5 characters`,'black');
            return false;
        }
        else if(username.length >5){
            // then it should move to the next line to check if subject 
            // is not empty
              if(subject === '' || subject===undefined){
                    errorFileds('red',`Please subject can't be empty`,'white');
                    return false;
                }
            
            else if(subject.length <=7){
                errorFileds('yellow',`Please subject should have more than 7 characters`,'black');
                return false;
            }
            else if(subject.length >7){

                //check if phone number is not empty
                if(phone ==='' || phone ===undefined){
                    errorFileds('red',`Please phone can't be empty`,'white');
                    return false;

                }
                else if(isNaN(phone)){
                    errorFileds('blue',`Please enter a valid phone number`,'white');
                    return false;
                }
                else if(phone.length !=10){
                    errorFileds('yellow',`Please phone should be equal or more than 10 characters`,'black');
                    return false;

                }
                else if(phone.length =10 || phone.length > 10){
                    //check if email is not empty

                    if(email ==='' || email ===undefined){
                        errorFileds('red',`Please email can't be empty`,'white');
                        return false;
                    }
                    else if(email.indexOf('@') == -1){
                        errorFileds('blue',`Please enter a valid email`,'white');
                        return false;
                    }
                    else if(email.length <8){
                        errorFileds('yellow',`Please email should be equal or more than 8  characters`,'black');
                    }
                    else if(email.length >=8){
                        // check if country is not empty
                        if(country ==='' || country === undefined){
                            errorFileds('red',`Please country can't be empty`,'white');
                            return false;
                        }
                        else if( country.length >1){
                            //check if message is not empty
                            if(message ==='' || message ===undefined){
                                errorFileds('red',`Please message can't be empty`,'white');
                                return false;

                            }else if(message.length>1){

                                const msg= confirm(`Mr/Mrs ${username} Do you want to submit this form?`);
     
                                if(msg == true){

                                   if(window.navigator.onLine){

                                    successfulMessageSentProgressBar();
                                    connectDatabase();
                            
                                   }
                                   else{
                                       MessageNotSentProgressBar();
                                   }
                                   
                                    
                                }
                                else{
                                   
                                    
                                }
                            }


                           

                        }
                
                    }

                }
              
            }
            
        }
       
         

    });
  
    







