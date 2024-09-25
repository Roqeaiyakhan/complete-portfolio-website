// for header section

var header = document.querySelector(".header");

hamurger.addEventListener('click', () =>{
    hamurger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// menu section

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        hamurger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });
});




const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        e.preventDefault();  // Prevent form submission
    }
});
