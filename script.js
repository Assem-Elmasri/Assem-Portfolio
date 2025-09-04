

// bar menu toggle
const bar = document.querySelector(".fa-bars");
const ul = document.querySelector("nav ul");
bar.addEventListener("click", () => {
  ul.classList.toggle("hidden");
});

// handling pop-up
const hireMeBtn = document.getElementById("hire-me-btn");
const popUp = document.querySelector("div.fixed");
const closePopUp = document.querySelector("div.fixed form button#close-btn");
hireMeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.classList.toggle("hidden");
});
closePopUp.addEventListener("click", () => {
  popUp.classList.toggle("hidden");
});


const contact = document.getElementById("contact");
contact.addEventListener("click", (e) => {
  e.preventDefault();
  popUp.classList.toggle("hidden");
});

// send email

document.querySelector("#contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm('service_lodk7no', 'template_k8y98aq', this)
    .then(() => {
      alert("Message sent successfully!");
      document.querySelector("#contact-form").reset();
      document.querySelector("#contact-form").parentElement.classList.toggle("hidden");
    }, (error) => {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
