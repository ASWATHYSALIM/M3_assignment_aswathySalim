

function valid_clNo()
    {
        console.log("clock number validation")
      var clNo = document.getElementById('clockNo').value;
      console.log(clNo)
        var clno_err=document.getElementById('err_clno')
      // Check if the input is not null and has a length up to 6 digits
      if (clNo !== null && clNo.length > 0 && clNo.length < 6 && /^\d+$/.test(clNo)) {
          alert('Clock Number should be 6 digit.');
          return false; // Allow form submission
      } else {
    
         return true; // Prevent form submission
      }
    }
    function valid_fname() {
      // Get the input value
      var fname = document.getElementById('firstName').value;

      // Define a regular expression for alphabets
      var alphabetRegex = /^[A-Za-z]+$/;

      // Test if the input consists only of alphabets
      if (alphabetRegex.test(fname)) {
          return true;
      } else {
          alert('First Name should contain only alphabets.');
          return false;
      }
    }
    function valid_lname() {
        // Get the input value
        var lname = document.getElementById('lastName').value;

        // Define a regular expression for alphabets
        var alphabetRegex = /^[A-Za-z]+$/;

        // Test if the input consists only of alphabets
        if (alphabetRegex.test(lname)) {
            return true;
        } else {
            alert('Last Name should contain only alphabets.');
            return false;
        }
    }

 

    function valida_phNo() {
            // Get the phone number input value
            var pnNo = document.getElementById('phNo').value;

            // Define a regular expression for a 10-digit phone number
            var phoneNumberRegex = /^\d{10}$/;

            // Test if the input matches the pattern
            if (phoneNumberRegex.test(pnNo)) {
               // alert('Valid phone number.');
               return true;
            } else {
                alert('Please enter a valid 10-digit phone number.');
                return false;
            }
    }

    function valid_reph(){
      var phno1=document.getElementById('phNo').value;
      var rePh=document.getElementById('phNoRe').value;
      if(rePh==phno1)
      {
        return true
      }
      else
      {
        alert('Phone Number Mismatch');
        return false          
      }
    } 
    function valid_Email() {
      // Get the email input value
      var email = document.getElementById('email').value;

      // Define a regular expression for email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Test if the input matches the pattern
      if (emailRegex.test(email)) {
         return true;
      } else {
          alert('Please enter a valid email address.');
          return false;
      }
  }
  function valid_brname() {
    // Get the input value
    var bname = document.getElementById('branchName').value;

    // Define a regular expression for alphabets
    var alphabetRegex = /^[A-Za-z]+$/;

    // Test if the input consists only of alphabets
    if (alphabetRegex.test(bname)) {
        return true;
    } else {
        alert('Lbranch Name should contain only alphabets.');
        return false;
    }
}


    function valid_form()
    {
        console.log("form validation")
       if(valid_clNo()=== true && valid_fname()===true && valid_lname()===true && valida_phNo()===true && valid_reph()=== true && valid_Email()===true)   
      {
       return true;
       }
       else 
       {
        return false;
       }


    }