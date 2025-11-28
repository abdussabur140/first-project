const headers = document.querySelectorAll(".accordion-header");

// Open first item by default
if (headers.length > 0) {
    const firstBody = headers[0].nextElementSibling;
    const firstIcon = headers[0].querySelector(".icon");

    firstBody.style.display = "block"; 
    firstIcon.style.backgroundImage = 'url("minus-sign.svg")'; 
}

headers.forEach(header => {
    header.addEventListener("click", () => {

        // Close all except clicked one
        document.querySelectorAll(".accordion-body").forEach(body => {
            if(body !== header.nextElementSibling) {
                body.style.display = "none";
            }
        });

        // Reset all icons except clicked header
        document.querySelectorAll(".icon").forEach(icon => {
            if(icon !== header.querySelector(".icon")) {
                icon.style.backgroundImage = 'url("plus-sign (1).svg")';
            }
        });

        const body = header.nextElementSibling;
        const icon = header.querySelector(".icon");

        // Toggle
        if (body.style.display === "block") {
            body.style.display = "none";
            icon.style.backgroundImage = 'url("plus-sign (1).svg")';
        } else {
            body.style.display = "block";
            icon.style.backgroundImage = 'url("minus-sign.svg")';
        }
    });
});
