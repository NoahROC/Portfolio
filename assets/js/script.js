const form = document.getElementById("contact-form");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup-button");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        popup.style.display = "flex";
    } else {
        alert("Form submitted");
        form.reset();
    }
});

closePopup.addEventListener("click", function () {
    popup.style.display = "none";
});
