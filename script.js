
  
      function changecolor()
         {
           var t=document.getElementById("text");
           
           t.style="color: red; background-color: rgba(5, 718, 298, 0.5)";

            
        } 
  

        function checkPasswordStrength() 
        {
            var passwordTextBox = document.getElementById("psw");
            var password = passwordTextBox.value;
            var specialCharacters = "!£$%^&*_@#~?";
            var passwordScore = 0;
    
            passwordTextBox.style.color = "white";
    
            // Contains special characters
            for (var i = 0; i < password.length; i++) 
            {
                if (specialCharacters.indexOf(password.charAt(i)) > -1) 
                {
                    passwordScore += 20;
                    break;
                }
            }
    
            // Contains numbers
            if (/\d/.test(password))
                passwordScore += 20;
    
            // Contains lower case letter
            if (/[a-z]/.test(password))
                passwordScore += 20;
    
            // Contains upper case letter
            if (/[A-Z]/.test(password))
                passwordScore += 20;
    
            if (password.length >= 8)
                passwordScore += 20;
    
            var strength = "";
            var backgroundColor = "red";
    
            if (passwordScore >= 100) 
            {
                strength = "Strong";
                backgroundColor = "green";
            }
            else if (passwordScore >= 80) 
            {
                strength = "Medium";
                backgroundColor = "gray";
            }
            else if (passwordScore >= 60) 
            {
                strength = "Weak";
                backgroundColor = "maroon";
            }
            else 
            {
                strength = "Very Weak";
                backgroundColor = "red";
            }
    
            document.getElementById("label1").innerHTML = strength;
            passwordTextBox.style.backgroundColor = backgroundColor;
        }





  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
       
      
  