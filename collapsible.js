const cards = document.getElementsByClassName("project-card");

for (let i = 0; i < cards.length; i++) {
    let button = cards[i].firstElementChild
    button.onclick = () => {
        button.classList.toggle = "active";
        console.log(button.classList)
        let content = cards[i].lastElementChild;
        if (content.style.display === "flex") {
            content.style.display = "none";
        } else {
            content.style.display = "flex";
        }
    };
}