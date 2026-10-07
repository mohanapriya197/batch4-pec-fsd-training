// ================================
// ACTIVE NAVIGATION LINK
// ================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        // Check name
        if (name === "") {
            formMessage.textContent = "Please enter your name.";
            formMessage.style.color = "red";
            return;
        }

        // Check email
        if (email === "") {
            formMessage.textContent = "Please enter your email.";
            formMessage.style.color = "red";
            return;
        }

        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent =
                "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        // Check message
        if (message === "") {
            formMessage.textContent =
                "Please enter your message.";
            formMessage.style.color = "red";
            return;
        }

        // Success
        formMessage.textContent =
            "Thank you, " + name +
            "! Your message has been submitted successfully.";

        formMessage.style.color = "green";

        // Clear form
        contactForm.reset();

    });
}


// ================================
// PROJECT BUTTON
// ================================

function showProject(projectName) {

    alert(
        "Project: " + projectName +
        "\n\nMore details about this project can be added here."
    );

}
