document.getElementById('myForm').addEventListener('submit', function(e) 
{
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // You can perform additional validation here if needed
  
    // Display submission message
    var messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '<p>Thank you, ' + name + '! We received your submission.</p>';
  
    // You can also send the form data to a server using AJAX if needed
  });
  