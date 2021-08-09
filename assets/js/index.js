function main() {
    const scrollButton = document.querySelector(".back-to-top");

    scrollButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

window.addEventListener("load", main);