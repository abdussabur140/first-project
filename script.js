const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        document.querySelectorAll(".accordion-body").forEach(body => {
            if(body !== header.nextElementSibling) {
                body.style.display = "none";
            }
        });
        document.querySelectorAll(".icon").forEach(icon => {
            if(icon !== header.querySelector(".icon")) {
                icon.textContent = "+";
            }
        });

        const body = header.nextElementSibling;
        const icon = header.querySelector(".icon");

        if (body.style.display === "block") {
            body.style.display = "none";
            icon.textContent = "+";
        } else {
            body.style.display = "block";
            icon.textContent = "-";
        }

    });
});