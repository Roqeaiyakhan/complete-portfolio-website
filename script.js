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
