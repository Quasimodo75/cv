      function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }

  let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
     mybutton.style.display = "none";
   }
 }

// send email
function sendEmail() {

  console.log("clicked")

  Email.send({
    Host: "smtp.gmail.com",
    Username: "t0175468@gmail.com",
    Password: "0732232245",
    To: 'Kwazikubheka777@gmail.com',
    From: document.getElementById("fname").value,
    Subject: "New contact form Enquiry",
    Body: document.getElementById('subject').value
  }).then(
    message => alert(message)
  ).catch(e => console.log(e));
}

