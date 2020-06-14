let pics = document.querySelectorAll(".img-cap");

pics.forEach((pic) => {
    pic.onmouseover = () => {
        pic.lastElementChild.style.opacity = "100%";
        pic.lastElementChild.style.backgroundColor = "rgba(0, 0, 0, 36%)";
    }
    
    pic.onmouseout = () => {
        pic.lastElementChild.style.opacity = "0%";
        pic.lastElementChild.style.backgroundColor = "rgba(0, 0, 0, 0%)";
    }
});