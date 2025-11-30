
const headers = document.querySelectorAll(".accordion-header");

if (headers.length > 0) {
    const firstBody = headers[0].nextElementSibling;
    const firstIcon = headers[0].querySelector(".icon");

    firstBody.style.display = "block";
    firstIcon.style.backgroundImage = 'url("minus-sign.svg")';
}

headers.forEach(header => {
    const icon = header.querySelector(".icon");
    icon.addEventListener("click", (e) => {
        e.stopPropagation();   

        const body = header.nextElementSibling;

        headers.forEach(h => {
            if (h !== header) {
                h.nextElementSibling.style.display = "none";
                h.querySelector(".icon").style.backgroundImage =
                    'url("plus-sign (1).svg")';
            }
        });
        if (body.style.display === "block") {
            body.style.display = "none";
            icon.style.backgroundImage = 'url("plus-sign (1).svg")';
        } else {
            body.style.display = "block";
            icon.style.backgroundImage = 'url("minus-sign.svg")';
        }
    }); 
});
